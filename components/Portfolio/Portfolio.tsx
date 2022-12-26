import clsx from 'clsx'
import Link from 'next/link'
import type { FC, HTMLAttributes } from 'react'
import { Card } from './Card'

type PortfolioProps = HTMLAttributes<HTMLDivElement>

const companies = [
  'tutu',
  'naumen',
  'everdrop',
  'bumble',
  'genomed',
  'ebot',
  'yva',
  'unigenomed',
  'evolenta',
] as const

const title: Record<typeof companies[number], string> = {
  tutu: 'Tutu',
  naumen: 'Naumen',
  yva: 'Yva.ai',
  bumble: 'Bumble',
  ebot: 'E-Bot7',
  everdrop: 'Everdrop',
  evolenta: 'Эволента',
  genomed: 'Геномед',
  unigenomed: 'Университет Геномед',
}

const subtitle: Record<typeof companies[number], string> = {
  tutu: 'Российский сервис путешествий №1!',
  naumen: 'Информационные системы управления растущим бизнесом',
  yva: 'Yva – AI-Powered Employee Engagement and Performance Platform',
  bumble: 'Date, Meet, Network Better',
  ebot: 'The Conversational AI Customers Love - e-bot7',
  everdrop: 'Nachhaltige Reinigungsmittel & Naturkosmetik',
  evolenta: 'Ведущий российский центр разработки IT-продуктов',
  genomed: 'Лаборатория молекулярной патологии',
  unigenomed: 'Курсы по генетике для врачей',
}

export const Portfolio: FC<PortfolioProps> = (props) => {
  return (
    <div className={clsx(props.className)}>
      <div className="pt-16 pb-24 md:bg-gradient-to-l lg:pt-32 lg:pb-48">
        <h2 className="container mx-auto px-4 text-center text-5xl font-semibold tracking-tight  sm:px-6">
          Портфолио
        </h2>
        <div className="container mx-auto mt-6 mb-16 px-4 sm:px-6">
          <p className="mx-auto max-w-[40ch] text-center text-2xl text-slate-400">
            У наших сотрудников огромный опыт, который они получили, принимая
            участие во многих проектах. Некоторые из них представлены ниже.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 2xl:grid-cols-5">
          {companies.map((company) => (
            <Link key={company} href="#">
              <a style={{ perspective: '1500px' }}>
                <Card
                  className="h-full"
                  imgSrc={`/images/portfolio/${company}.webp`}
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-b from-transparent to-slate-300 px-4 py-6 text-center backdrop-blur-sm">
                    <div className="mb-1 font-semibold uppercase tracking-wider text-primary-900">
                      {title[company]}
                    </div>
                    <div className="mx-auto max-w-[24ch] text-xs font-semibold tracking-wide text-primary-800">
                      {subtitle[company]}
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
