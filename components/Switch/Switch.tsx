import { Switch as UiSwitch } from '@headlessui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { FC, ButtonHTMLAttributes } from 'react'

type SwitchProps = {
  checked?: boolean | undefined
  defaultChecked?: boolean | undefined
  onChange?(checked: boolean): void
  name?: string | undefined
  value?: string | undefined
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>

export const Switch: FC<SwitchProps> = (props) => {
  const { checked } = props

  return (
    <UiSwitch
      {...props}
      className={clsx(
        'relative inline-flex h-6 w-11 shrink-0 cursor-pointer',
        'rounded-full border-2 border-transparent shadow-inner',
        'transition-colors duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary-600': checked,
          'bg-primary-900': !checked,
        }
      )}
    >
      {({ checked }) => (
        <motion.span
          aria-hidden="true"
          variants={{
            on: { x: 20 },
            off: { x: 0 },
          }}
          initial={false}
          animate={checked ? 'on' : 'off'}
          className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-white shadow ring-0"
        >
          <svg
            className={clsx('h-3 w-3', {
              'text-primary-500': checked,
              'text-gray-500': !checked,
            })}
            fill={checked ? 'currentColor' : 'none'}
            viewBox="0 0 12 12"
          >
            <motion.path
              animate={{ pathLength: !checked ? 1 : 0 }}
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={checked ? 0 : 1}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <motion.path
              animate={{ pathLength: checked ? 1 : 0 }}
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </motion.span>
      )}
    </UiSwitch>
  )
}
