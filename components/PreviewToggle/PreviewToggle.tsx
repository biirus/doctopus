import clsx from 'clsx'
import { Switch } from '@headlessui/react'
import { isDevelopment } from 'lib/is-development'
import type { FC, HTMLAttributes } from 'react'
import { useRouter } from 'next/router'

type PreviewToggleProps = HTMLAttributes<HTMLDivElement>

export const PreviewToggle: FC<PreviewToggleProps> = (props) => {
  const { isPreview } = useRouter()

  if (!isDevelopment()) {
    return null
  }

  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center gap-2',
        props.className
      )}
    >
      <span className="truncate text-sm font-semibold text-white">Preview</span>
      <Switch
        checked={isPreview}
        className={clsx(
          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer',
          'rounded-full border-2 border-transparent shadow-inner',
          'transition-colors duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
          {
            'bg-primary-600': !isPreview,
            'bg-primary-900': isPreview,
          }
        )}
      >
        <span className="sr-only">Is Preview Mode</span>
        <span
          aria-hidden="true"
          className={clsx(
            'pointer-events-none inline-block h-5 w-5',
            'rounded-full bg-white shadow ring-0',
            'transition duration-200 ease-in-out',
            {
              'translate-x-5': isPreview,
              'translate-x-0': !isPreview,
            }
          )}
        >
          <span
            className={clsx(
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
              {
                'opacity-100': !isPreview,
                'opacity-0': isPreview,
              }
            )}
            aria-hidden="true"
          >
            <svg
              className="h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={clsx(
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
              {
                'opacity-100': isPreview,
                'opacity-0': !isPreview,
              }
            )}
            aria-hidden="true"
          >
            <svg
              className="h-3 w-3 text-primary-500"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </span>
      </Switch>
    </div>
  )
}
