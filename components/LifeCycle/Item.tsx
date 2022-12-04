import type { FC, HTMLAttributes } from 'react'
import { ItemDot } from './ItemDot'
import { ItemIcon, ItemIconProps } from './ItemIcon'

type ItemProps = {
  level: number
  headline: string
  subline: string
  icon: ItemIconProps['icon']
} & HTMLAttributes<HTMLDivElement>

export const Item: FC<ItemProps> = (props) => {
  return (
    <div className="relative flex items-center gap-4 lg:gap-6">
      <ItemDot className={props.className} />
      <div className="flex flex-1 items-center gap-3 rounded-md bg-white px-3 py-2 shadow-md lg:rounded-xl lg:px-5 lg:py-4">
        <ItemIcon className={props.className} icon={props.icon} />
        <div>
          <div className="font-semibold lg:text-lg lg:leading-5">
            {props.headline}
          </div>
          <div className="text-sm leading-4 text-slate-700 lg:text-base">
            {props.subline}
          </div>
        </div>
      </div>
    </div>
  )
}
