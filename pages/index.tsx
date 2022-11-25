import { Hero } from 'components/Hero'
import { Layout } from 'components/Layout'
import { Seo } from 'components/Seo'
import { loadTranslations } from 'lib/load-translations'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { FC } from 'react'

export const getStaticProps: GetStaticProps = async (props) => {
  const { locale } = props

  const translations = await loadTranslations(locale, [])
  return {
    props: {
      ...translations,
    },
    revalidate: 300,
  }
}

const IndexPage: FC = () => {
  return (
    <Layout>
      <Seo data={undefined} />

      <Hero />

      <div className="container mx-auto my-16 lg:mt-20">
        <p className="text-center text-base font-bold text-slate-900">
          В нашей работе мы используем различные технологии
        </p>

        <ul className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <li>
                <Image
                  src="/images/tech/laravel.svg"
                  alt="laravel"
                  height={48}
                  width={148}
                />
              </li>
              <li>
                <Image
                  src="/images/tech/mirage.svg"
                  alt="mirage"
                  height={48}
                  width={148}
                />
              </li>
              <li>
                <Image
                  src="/images/tech/statamic.svg"
                  alt="statamic"
                  height={48}
                  width={148}
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <li>
                <Image
                  src="/images/tech/statickit.svg"
                  alt="statickit"
                  height={48}
                  width={148}
                />
              </li>
              <li>
                <Image
                  src="/images/tech/transistor.svg"
                  alt="transistor"
                  height={48}
                  width={148}
                />
              </li>
              <li>
                <Image
                  src="/images/tech/tuple.svg"
                  alt="tuple"
                  height={48}
                  width={148}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
