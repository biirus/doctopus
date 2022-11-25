import { CMSParams, CMSResource, fetchCMSAPI, Media, SEO } from './cms'

export type BlogPost = CMSResource<{
  headline: string
  content: string
  cover: { data: Media | null }
  shortDescription: string
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  locale: 'ru' | 'en'
  slug: string
  seo?: SEO
}>

export const fetchBlogList = async (
  page = 1,
  locale: string | string[] = 'ru',
  preview = false
) => {
  const options: CMSParams<BlogPost> = {
    locale,
    populate: ['cover', 'seo'],
    sort: ['publishedAt:desc'],
    fields: ['headline', 'shortDescription', 'publishedAt', 'slug'],
    pagination: {
      page,
      pageSize: 2,
    },
  }

  if (preview) {
    options.publicationState = 'preview'
  }

  return await fetchCMSAPI<BlogPost>('/api/blog-posts', options)
}

export const fetchBlogPost = async (
  slug: string | undefined,
  locale: string | string[] = 'ru',
  preview = false
) => {
  const options: CMSParams<BlogPost> = {
    locale,
    populate: '*',
    filters: {
      slug,
    },
  }

  if (preview) {
    options.publicationState = 'preview'
  }

  return await fetchCMSAPI<BlogPost>('/api/blog-posts', options)
}
