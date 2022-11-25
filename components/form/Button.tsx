import clsx from 'clsx'
import Loading from 'components/Loading/Loading'
import { AnimatePresence, motion } from 'framer-motion'

import type { FC, ButtonHTMLAttributes } from 'react'

export type Variant = 'primary' | 'accent' | 'danger' | 'default' | 'invert'
export type Size = 'large' | 'medium' | 'small'

type ButtonProps = {
  clear?: boolean
  loading?: boolean
  variant?: Variant
  size?: Size
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = 'default',
    size = 'medium',
    className,
    children,
    loading,
    clear,
    ...rest
  } = props

  return (
    <button
      type="button"
      className={clsx(
        'rounded-md border border-transparent shadow-sm outline-none',
        'select-none leading-[0]',
        'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        {
          'pointer-events-none': loading,
        },
        {
          'gap-3 px-6 py-3 text-base': size === 'large',
          'gap-2 px-4 py-2 text-sm': size === 'medium',
          'gap-1.5 px-2.5 py-1.5 text-xs': size === 'small',
        },
        {
          'bg-primary-500 text-white': variant === 'primary',
          'hover:bg-primary-600': variant === 'primary',

          '!border-primary-400 bg-primary-100 text-primary-700':
            variant === 'accent',
          'hover:bg-primary-200 ': variant === 'accent',

          'border-red-500/90 text-red-500': variant === 'danger',
          'hover:bg-red-500/10 ': variant === 'danger',

          '!border-gray-300 bg-white text-gray-700': variant === 'default',
          'hover:bg-gray-50': variant === 'default',

          'text-white': variant === 'invert',
          'hover:bg-white/10': variant === 'invert',

          '!border-none !bg-transparent !shadow-none': clear,
        },
        className
      )}
      {...rest}
    >
      <div className="relative">
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, x: '-50%', y: '-50%' }}
              exit={{ scale: 0, x: '-50%', y: '-50%' }}
              className="absolute left-1/2 top-1/2 h-5 w-5 "
            >
              <Loading className="h-full w-full origin-center animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>

        <span
          className={clsx(
            'inline-flex items-center gap-2',
            'text-sm font-medium leading-4',
            {
              'opacity-0': loading,
            }
          )}
        >
          {children}
        </span>
      </div>
    </button>
  )
}
