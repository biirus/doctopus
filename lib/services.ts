import qs from 'qs'
import {
  CMSParams,
  CMSResource,
  CMSResponse,
  fetchCMSAPI,
  getCMSURL,
} from './cms'

export type Service = CMSResource<{
  title: string
  article: string
  shortDescription: string
  description: string
  price: number
  deadline: number
  createdAt: string
  updatedAt: string
  publishedAt: string
}>

export const fetchServicesList = async (
  page = 1,
  locale: string | string[] = 'ru',
  preview = false,
  filters?: CMSParams<Service>['filters'],
  pageSize?: number
) => {
  const options: CMSParams<Service> = {
    locale,
    populate: '*',
    sort: ['createdAt:desc'],
    fields: ['title', 'shortDescription', 'deadline', 'publishedAt', 'article'],
    pagination: {
      page,
      pageSize: pageSize || 10,
    },
    filters,
  }

  if (preview) {
    options.publicationState = 'preview'
  }

  return await fetchCMSAPI<Service>('/api/services', options)
}

export const fetchService = async (
  article: string,
  locale: string | string[] = 'ru',
  preview = false
) => {
  const options: CMSParams<Service> = {
    locale,
    populate: '*',
    filters: {
      article,
    },
  }

  if (preview) {
    options.publicationState = 'preview'
  }

  return await fetchCMSAPI<Service>('/api/services', options)
}

export const searchServices = async (
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
    '/search/indexes/service/search'
  )}?${params.toString()}`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'applications/json',
    },
  })

  const data = (await response.json()) as {
    hits: Array<Service['attributes'] & { id: string }>
    estimatedTotalHits: number
    limit: number
    offset: number
  }

  const result: CMSResponse<Service> = {
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
