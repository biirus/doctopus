import {
  CheckCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid'

import { Toast as ToastType } from 'contexts/ToastContext'
import { FC, HTMLAttributes } from 'react'

type ToastProps = {
  open: boolean
  onClose: () => void
} & ToastType &
  HTMLAttributes<HTMLDivElement>

export const Toast: FC<ToastProps> = (props) => {
  const { onClose } = props

  return (
    <div className="pointer-events-auto z-10 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200">
      <div className="p-4">
        <div className="flex items-start">
          <div className="shrink-0">
            {props.type === 'info' && (
              <InformationCircleIcon
                className="h-6 w-6 text-blue-400"
                aria-hidden="true"
              />
            )}
            {props.type === 'success' && (
              <CheckCircleIcon
                className="h-6 w-6 text-green-400"
                aria-hidden="true"
              />
            )}
            {props.type === 'error' && (
              <ExclamationTriangleIcon
                className="h-6 w-6 text-red-400"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{props.title}</p>

            {props.text && (
              <p className="mt-1 text-sm text-gray-900/70">{props.text}</p>
            )}
          </div>
          <div className="ml-4 flex shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
