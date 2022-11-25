import qs from 'qs'

type Nullable<T> = T | null
type AnyObject = Record<string, unknown>

export type SEO = Partial<
  Nullable<{
    id: number
    noIndex: boolean
    keywords: string
    metaTitle: string
    metaDescription: string
  }>
>

export type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type Media = {
  id: number
  attributes: {
    alternativeText: string
    caption: string
    createdAt: string
    ext: string
    formats: {
      large: MediaFormat
      medium: MediaFormat
      small: MediaFormat
      thumbnail: MediaFormat
    }
    hash: string
    height: 1960
    mime: string
    name: string
    previewUrl: string | null
    provider: string
    provider_metadata: null
    size: number
    updatedAt: string
    url: string
    width: number
  }
}

export type MediaFormat = {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  path: null
  size: number
  url: string
  width: number
}

export type CMSResponse<T> = {
  data: T[]
  meta: {
    pagination: Pagination
  }
}

export type CMSResource<TAttributes extends AnyObject = AnyObject> = {
  id: number
  attributes: TAttributes
}

type Sort<TKey> = TKey extends string ? `${TKey}:asc` | `${TKey}:desc` : never
type Filter<TKey> = Partial<
  Record<TKey extends string ? TKey : never, unknown> & {
    $or?: Array<Filter<TKey>>
    $and?: Array<Filter<TKey>>
  }
>

type Params<
  TResource extends CMSResource,
  TKey = keyof TResource['attributes']
> = {
  fields: TKey[]
  sort: Array<Sort<TKey>>
  populate: string | string[]
  pagination: Pick<Pagination, 'page' | 'pageSize'>
  publicationState: 'live' | 'preview'
  locale: string | string[]
  filters:
    | Filter<TKey>
    | { $or: Array<Filter<TKey>> }
    | { $and: Array<Filter<TKey>> }
}

export type CMSParams<TResource extends CMSResource> = Partial<
  Params<TResource>
> &
  Record<string, unknown>

export const getCMSURL = (path: string) => {
  return new URL(path, process.env.NEXT_PUBLIC_CMS_API_URL).toString()
}

export const fetchCMSAPI = async <T>(
  path: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cmsParams: CMSParams<any> = {},
  options: RequestInit = {}
): Promise<CMSResponse<T>> => {
  const DEFAULT_OPTIONS = {
    headers: {
      'Content-Type': 'applications/json',
    },
  }

  const fetchOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
  }

  const params = qs.stringify(cmsParams)
  const url = `${getCMSURL(path)}?${params.toString()}`

  const response = await fetch(url, fetchOptions)
  const data = (await response.json()) as CMSResponse<T>

  return data
}

export const getCMSImageSrc = (src: string) => {
  const url = new URL(src, process.env.NEXT_PUBLIC_CMS_API_URL)
  return url.href
}

export const getCMSResourceLink = (
  id: number,
  type: string,
  locale: string
) => {
  const path = `/admin/content-manager/collectionType/api::${type}.${type}/${id}`

  const params = qs.stringify({
    plugins: {
      i18n: {
        locale,
      },
    },
  })

  return `${getCMSURL(path)}?${params.toString()}`
}
