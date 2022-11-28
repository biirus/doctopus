import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'

type TechIconProps = { level: number } & HTMLAttributes<HTMLDivElement>

export const TechIcon: FC<TechIconProps> = (props) => {
  return (
    <div
      className={clsx(
        'flex aspect-square h-28 w-28 items-center justify-center rounded-xl bg-white p-4 lg:p-8',
        'xl:h-36 xl:w-36',
        '2xl:h-40 2xl:w-40',
        {
          'shadow-md': props.level === 3,
          'shadow-lg': props.level === 2,
          'shadow-xl': props.level === 1,
        }
      )}
    >
      {props.children}
    </div>
  )
}
