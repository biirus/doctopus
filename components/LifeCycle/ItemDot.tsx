import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'

type ItemDotProps = HTMLAttributes<HTMLDivElement>

export const ItemDot: FC<ItemDotProps> = (props) => {
  return (
    <div className="relative px-1">
      <div
        className={clsx(
          'h-3 w-3 rounded-full ring-8 ring-slate-100',
          props.className
        )}
      />
    </div>
  )
}
