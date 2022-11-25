import { ComponentProps } from 'react'
import { Rule } from './access-matrix'

export type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element

export type Nullable<T> = { [P in keyof T]: T[P] | null }

export type PageProps<T = Record<string, unknown>> = {
  restricted: boolean
  accessRules?: Rule[]
} & T
