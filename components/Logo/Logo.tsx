import clsx from 'clsx'
import Image from 'next/image'
import type { FC, HTMLAttributes } from 'react'

type LogoProps = {
  iconOnly?: boolean
} & HTMLAttributes<HTMLDivElement>

export const Logo: FC<LogoProps> = (props) => {
  return (
    <div className={clsx('flex items-center gap-4', props.className)}>
      <Image
        className="h-8 w-auto"
        width={32}
        height={32}
        src="/images/logo.png"
        alt="Doctopus"
      />

      {!props.iconOnly && (
        <span className="flex-1 truncate text-lg font-bold">Doctopus</span>
      )}
    </div>
  )
}
