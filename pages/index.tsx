import { Hero } from 'components/Hero'
import { Layout } from 'components/Layout'
import { LifeCycle } from 'components/LifeCycle'
import { LogoList } from 'components/LogoList'
import { Seo } from 'components/Seo'
import { Team } from 'components/Team'
import { Tech } from 'components/Tech'
import { Testimonial } from 'components/Testimonial'
import { loadTranslations } from 'lib/load-translations'
import { GetStaticProps } from 'next'
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

      <div className="container mx-auto my-16 px-4 sm:px-6 lg:mt-20">
        <p className="text-center text-base font-bold text-slate-900">
          В нашей работе мы используем различные технологии
        </p>
      </div>

      <LogoList className="my-8" />
      <Team className="my-16 lg:mt-20" />
      <Tech className="my-16 lg:mt-20" />
      <Testimonial className="my-16 lg:mt-20" />
      <LifeCycle className="my-16 md:pt-20 lg:mt-20" />
    </Layout>
  )
}

export default IndexPage
