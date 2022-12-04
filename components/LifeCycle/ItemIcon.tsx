import clsx from 'clsx'
import type { FC, HTMLAttributes, SVGProps } from 'react'

export type ItemIconProps = {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
} & HTMLAttributes<HTMLDivElement>

export const ItemIcon: FC<ItemIconProps> = (props) => {
  return (
    <div
      className={clsx(
        'flex h-8 w-8 flex-none items-center justify-center rounded-md text-white ring-1 ring-inset ring-black/30 lg:h-10 lg:w-10 lg:rounded-lg',
        props.className
      )}
    >
      <props.icon className="h-5 w-5 lg:h-7 lg:w-7" />
    </div>
  )
}
