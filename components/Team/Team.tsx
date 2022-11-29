import clsx from 'clsx'
import Image from 'next/image'
import type { FC, HTMLAttributes } from 'react'

type TeamProps = HTMLAttributes<HTMLDivElement>

export const Team: FC<TeamProps> = (props) => {
  return (
    <div className={clsx(props.className)}>
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-primary-900 pt-16 pb-24 text-white md:bg-gradient-to-l  lg:pt-32 lg:pb-48">
        <h2 className="container mx-auto px-4 text-5xl font-semibold tracking-tight text-white sm:px-6">
          Наша команда
        </h2>
        <div className="container mx-auto mt-3 px-4 text-2xl tracking-tight text-slate-400 sm:px-6">
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolor suscipit sequi facilis soluta culpa quisquam harum nihil,
            voluptates ad. Temporibus minima molestiae similique iure ipsa
            fugiat harum ratione magnam.
          </p>
        </div>
      </div>

      <div className="container mx-auto -mt-16 grid grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:-mt-32 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-8 py-12 shadow-lg">
          <div className="mb-3 h-40 w-40 rounded-full shadow-sm ring-2 ring-primary-700">
            <Image
              src="https://i.pravatar.cc/300"
              alt="person"
              width={256}
              height={256}
              layout="responsive"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary-700">
              Глеб Куликов
            </div>
            <div className="text-sm font-bold text-accent-700">
              Chief Executive Officer
            </div>
          </div>

          <div className="text-center text-sm text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            velit numquam officia quam qui ipsum! Natus, vitae?
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-8 py-12 shadow-lg">
          <div className="mb-3 h-40 w-40 rounded-full shadow-sm ring-2 ring-primary-700">
            <Image
              src="https://i.pravatar.cc/300?rnd=1"
              alt="person"
              width={256}
              height={256}
              layout="responsive"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary-700">
              Илья Савинов
            </div>
            <div className="text-sm font-bold text-accent-700">
              Senior Content Manager
            </div>
          </div>

          <div className="text-center text-sm text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            velit numquam officia quam qui ipsum! Natus, vitae?
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-8 py-12 shadow-lg">
          <div className="mb-3 h-40 w-40 rounded-full shadow-sm ring-2 ring-primary-700">
            <Image
              src="https://i.pravatar.cc/300?rnd=2"
              alt="person"
              width={256}
              height={256}
              layout="responsive"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary-700">
              Алеся Бурнаева
            </div>
            <div className="text-sm font-bold text-accent-700">
              Senior QA Engineer
            </div>
          </div>

          <div className="text-center text-sm text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            velit numquam officia quam qui ipsum! Natus, vitae?
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-8 py-12 shadow-lg">
          <div className="mb-3 h-40 w-40 rounded-full shadow-sm ring-2 ring-primary-700">
            <Image
              src="https://i.pravatar.cc/300?rnd=3"
              alt="person"
              width={256}
              height={256}
              layout="responsive"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary-700">
              Андрей Подколзин
            </div>
            <div className="text-sm font-bold text-accent-700">
              Chief Technology Officer
            </div>
          </div>

          <div className="text-center text-sm text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            velit numquam officia quam qui ipsum! Natus, vitae?
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-8 py-12 shadow-lg">
          <div className="mb-3 h-40 w-40 rounded-full shadow-sm ring-2 ring-primary-700">
            <Image
              src="https://i.pravatar.cc/300?rnd=4"
              alt="person"
              width={256}
              height={256}
              layout="responsive"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary-700">
              Иван Бурнаев
            </div>
            <div className="text-sm font-bold text-accent-700">Just a GOD</div>
          </div>

          <div className="text-center text-sm text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            velit numquam officia quam qui ipsum! Natus, vitae?
          </div>
        </div>
      </div>
    </div>
  )
}
