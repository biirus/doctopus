import clsx from 'clsx'
import Image from 'next/image'
import type { FC, HTMLAttributes } from 'react'

type LogoListProps = HTMLAttributes<HTMLDivElement>

export const LogoList: FC<LogoListProps> = (props) => {
  return (
    <ul
      className={clsx(
        'flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0',
        props.className
      )}
    >
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
  )
}
