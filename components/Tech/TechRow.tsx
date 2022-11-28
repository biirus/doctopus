import type { FC, HTMLAttributes } from 'react'

type TechRowProps = { level: number } & HTMLAttributes<HTMLDivElement>

export const TechRow: FC<TechRowProps> = (props) => {
  return (
    <div
      style={{ animationDelay: `${props.level * 750}ms` }}
      className="hover:pause relative flex animate-slide-lr justify-center gap-12 lg:animate-slide-ud lg:flex-col"
    >
      {props.children}
    </div>
  )
}
