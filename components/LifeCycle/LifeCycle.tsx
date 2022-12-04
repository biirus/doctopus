import {
  CogIcon,
  DocumentArrowUpIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  RectangleGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import type { FC, HTMLAttributes } from 'react'
import { Item } from './Item'

type LifeCycleProps = HTMLAttributes<HTMLDivElement>

export const LifeCycle: FC<LifeCycleProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="container relative mx-auto px-4 text-slate-900 sm:px-6">
        <div className="mx-auto grid grid-cols-1 items-center gap-y-16 gap-x-8 md:grid-cols-2 xl:gap-x-16">
          <div>
            <h2 className="text-5xl font-semibold tracking-tight text-slate-900">
              Как мы работаем
            </h2>
            <div className="mt-3 text-2xl tracking-tight text-slate-600">
              <p className="max-w-prose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                dolor suscipit sequi facilis soluta culpa quisquam.
              </p>
            </div>
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-2 w-1 rounded bg-slate-200" />
            <div className="space-y-6 lg:space-y-8">
              <Item
                level={0}
                className="bg-sky-700"
                icon={DocumentTextIcon}
                headline="Планирование"
                subline="Первый и порой самый важный этап работы"
              />

              <Item
                level={1}
                className="bg-indigo-700"
                icon={PresentationChartLineIcon}
                headline="Анализ"
                subline="Получаем обратную связь, формируем требования"
              />

              <Item
                level={2}
                className="bg-purple-700"
                icon={RectangleGroupIcon}
                headline="Проектирование"
                subline="Системный дизайн, бизнес требования"
              />

              <Item
                level={3}
                className="bg-pink-700"
                icon={WrenchScrewdriverIcon}
                headline="Разработка"
                subline="Реализация намеченных планов"
              />

              <Item
                level={4}
                className="bg-orange-700"
                icon={DocumentMagnifyingGlassIcon}
                headline="Тестирование"
                subline="Проверка качества системы и ее интеграция"
              />

              <Item
                level={5}
                className="bg-yellow-700"
                icon={DocumentArrowUpIcon}
                headline="Развертывание"
                subline="Финальный этап начальной разработки"
              />

              <Item
                level={6}
                className="bg-lime-700"
                icon={CogIcon}
                headline="Поддержка"
                subline="Обновление системы из-за внешних факторов"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
