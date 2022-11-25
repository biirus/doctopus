import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'

type TextPlaceholderProps = {
  min?: number
  max?: number
  isLoading: boolean
} & HTMLAttributes<HTMLDivElement>

const getRandomString = (min: number, max: number) => {
  const loremText =
    'Loremipsumdolor sit amet, consectetur adipiscing elit. Vestibulum ornare lectus at lacus eleifend dictum. Phasellus blandit dui vitae est venenatis, vitae tristique tortor scelerisque. Morbi non lacinia quam, quis placerat justo.'

  return loremText
    .split(' ')
    .slice(0, Math.round(Math.random() * (max - min) + min))
    .join(' ')
}

export const TextPlaceholder: FC<TextPlaceholderProps> = (props) => {
  const { max = 10 } = props
  let { min = 5 } = props

  if (max < min) {
    min = max
  }

  if (!props.isLoading) {
    return <>{props.children}</>
  }

  const text = getRandomString(min, max)
  return (
    <span
      className={clsx(
        'animate-pulse rounded bg-gray-200 text-transparent',
        props.className
      )}
    >
      {text}
    </span>
  )
}
