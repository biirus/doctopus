import { SEO } from 'lib/cms'
import { NextSeo } from 'next-seo'
import type { FC, HTMLAttributes } from 'react'

type SeoProps = {
  data: SEO | undefined
} & HTMLAttributes<HTMLDivElement>

export const Seo: FC<SeoProps> = ({ data }) => {
  return (
    <NextSeo
      defaultTitle="Doctopus"
      titleTemplate="%s | Doctopus"
      title={data?.metaTitle || ''}
      noindex={Boolean(data?.noIndex)}
      description={
        data?.metaDescription ||
        '🐙 Doctopus. Комплексные решения для онлайн бизнеса.'
      }
    />
  )
}
