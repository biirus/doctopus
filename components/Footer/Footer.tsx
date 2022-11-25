import { Logo } from 'components/Logo'
import {
  AtSymbolIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import type { FC, HTMLAttributes } from 'react'

type FooterProps = HTMLAttributes<HTMLDivElement>

export const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className={props.className}>
      <div className="border-t border-gray-200 p-4 sm:p-6">
        <Logo />

        <div className="my-4 text-sm text-gray-400 md:text-base">
          <div>Юридический адрес: 430030,</div>
          <div>Саранск, Улица Гагарина, д. 34</div>
        </div>

        <div className="my-4 flex flex-wrap gap-x-8 gap-y-4 text-blue-500">
          <div className="flex flex-1 flex-col gap-2">
            <a className="font-semibold hover:underline" href="#">
              Каталог
            </a>
            <a className="hover:underline" href="#">
              НИПТ
            </a>
            <a className="hover:underline" href="#">
              ПГТ
            </a>
            <a className="hover:underline" href="#">
              Исследования
            </a>
          </div>

          <div className="flex flex-1 flex-col gap-2 ">
            <a className="font-semibold hover:underline" href="#">
              О компании
            </a>
            <a className="hover:underline" href="#">
              Новости
            </a>
            <a className="hover:underline" href="#">
              СМИ о нас
            </a>
            <a className="hover:underline" href="#">
              Контакты
            </a>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <a className="font-semibold hover:underline" href="#">
              Поддержка
            </a>
            <a className="hover:underline" href="#">
              Пациентам
            </a>
            <a className="hover:underline" href="#">
              Клиникам
            </a>
            <a className="hover:underline" href="#">
              Партнерам
            </a>
          </div>
        </div>

        <div className="my-8 flex flex-col gap-x-8 gap-y-2 text-sm lg:flex-row">
          <div className="flex flex-1 items-center gap-1">
            <MapPinIcon className="h-5 w-5 text-gray-400" />
            г. Саранск, ул. Гагарина, д. 34, кв. 2
          </div>
          <div className="flex flex-1 items-center gap-1">
            <AtSymbolIcon className="h-5 w-5 text-gray-400" />

            <a
              className="text-blue-500 hover:underline"
              href="mailto:info@doctopus.ru"
            >
              info@doctopus.ru
            </a>
          </div>
          <div className="flex flex-1 items-center gap-1">
            <PhoneIcon className="h-5 w-5 text-gray-400" />

            <a
              className="text-blue-500 hover:underline"
              href="tel:+7-977-977-77-77"
            >
              +7 (977) 977 77 77
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-400">
          <div>
            &copy;&nbsp;&laquo;Doctopus&raquo;. Все права защищены
            и&nbsp;охраняются законом.
          </div>
        </div>
      </div>
    </footer>
  )
}
