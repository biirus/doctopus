import qs from 'qs'
import {
  CMSParams,
  CMSResource,
  CMSResponse,
  fetchCMSAPI,
  getCMSURL,
  SEO,
} from './cms'

export type NIPT = 'НИПТ 3' | 'НИПТ 5' | 'НИПТ Р' | 'НИПТ М'

export type Analyse = CMSResource<{
  title: string
  slug: string
  article: string
  shortDescription: string
  description: string
  indications: string | null
  analytics: string | null
  retailPrice: number
  wholesalePrice: number
  group: string
  deadline: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: 'ru' | 'en'
  nipt: NIPT | null
  seo?: SEO
}>

export const fetchAnalysesList = async (
  page = 1,
  locale: string | string[] = 'ru',
  preview = false,
  filters?: CMSParams<Analyse>['filters'],
  pageSize?: number
) => {
  const options: CMSParams<Analyse> = {
    locale,
    populate: 'seo',
    sort: ['createdAt:desc'],
    fields: [
      'retailPrice',
      'title',
      'shortDescription',
      'deadline',
      'publishedAt',
      'slug',
      'article',
    ],
    pagination: {
      page,
      pageSize: pageSize || 10,
    },
    filters,
  }

  if (preview) {
    options.publicationState = 'preview'
  }

  return await fetchCMSAPI<Analyse>('/api/analyses', options)
}

export const fetchAnalyse = async (
  slug: string | undefined,
  locale: string | string[] = 'ru',
  preview = false
) => {
  const options: CMSParams<Analyse> = {
    locale,
    populate: ['seo', 'icon'],
    filters: {
      slug,
    },
  }

  if (preview) {
    options.publicationState = 'preview'
  }

  return await fetchCMSAPI<Analyse>('/api/analyses', options)
}

export const searchAnalyses = async (
  query: string,
  page = 1,
  pageSize = 10
) => {
  const params = qs.stringify({
    q: query,
    limit: pageSize,
    offset: (page - 1) * pageSize,
  })

  const url = `${getCMSURL(
    '/search/indexes/analyse/search'
  )}?${params.toString()}`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'applications/json',
    },
  })

  const data = (await response.json()) as {
    hits: Array<Analyse['attributes'] & { id: string }>
    estimatedTotalHits: number
    limit: number
    offset: number
  }

  const result: CMSResponse<Analyse> = {
    data: data.hits.map((hit) => {
      const { id, ...attributes } = hit
      const [, idNum] = id.split('-')

      return {
        id: parseInt(idNum || ''),
        attributes,
      }
    }),
    meta: {
      pagination: {
        total: data.estimatedTotalHits,
        page,
        pageSize,
        pageCount: Math.ceil(data.estimatedTotalHits / pageSize),
      },
    },
  }

  return result
}
