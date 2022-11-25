import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC, HTMLAttributes } from 'react'

type ModalProps = {
  open: boolean
  modal?: boolean
  onClose: () => void
} & HTMLAttributes<HTMLDivElement>

const transition = {
  type: 'spring',
  damping: 25,
  duration: 0.1,
  stiffness: 500,
}

export const Modal: FC<ModalProps> = (props) => {
  return (
    <AnimatePresence>
      {props.open && (
        <Dialog
          static
          as={motion.div}
          open={props.open}
          className="relative z-10"
          onClose={() => {
            if (!props.modal) {
              props.onClose()
            }
          }}
        >
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
              <Dialog.Panel
                as={motion.div}
                className={clsx(
                  'relative w-full max-w-[95vw] overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-lg',
                  props.className
                )}
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.95 }}
                transition={transition}
              >
                <div className="absolute top-0 right-0 pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                    tabIndex={-1}
                    onClick={props.onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {props.children}
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
