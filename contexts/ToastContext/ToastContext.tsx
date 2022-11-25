import { Toast } from 'components/Toast'
import { AnimatePresence, motion } from 'framer-motion'
import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

export type ToastType = 'info' | 'error' | 'success'

export type Toast = {
  type: ToastType
  title: string
  text?: string
}

type ToastContext = {
  addToast: (toast: Toast, autohideDelay?: number) => void
}

export const ToastContext = createContext<ToastContext>({
  addToast: () => undefined,
})

const getID = () => {
  return `${new Date().getTime()}:${Math.random()}`
}

export const ToastProvider: FC = (props) => {
  const [toasts, setToasts] = useState<Map<string, Toast>>(new Map())

  const handleToastClose = useCallback((id: string) => {
    setToasts((toasts) => {
      if (toasts.has(id)) {
        toasts.delete(id)
        return new Map(toasts)
      }

      return toasts
    })
  }, [])

  const addToast = useCallback(
    (toast: Toast, autohideDelay = 3000) => {
      const id = getID()

      setToasts((toasts) => {
        toasts.set(id, toast)
        return new Map(toasts)
      })

      if (autohideDelay) {
        setTimeout(() => {
          handleToastClose(id)
        }, autohideDelay)
      }
    },
    [handleToastClose]
  )

  const contextValue = useMemo(() => ({ addToast }), [addToast])

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      <div
        aria-live="assertive"
        data-testid="toasts-container"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center gap-4 sm:items-end">
          <AnimatePresence initial={false}>
            {Array.from(toasts.keys()).map((id) => {
              const toast = toasts.get(id)

              if (!toast) {
                return null
              }

              return (
                <motion.div
                  layout
                  key={id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 400 }}
                  dragElastic={0.2}
                  className="w-full max-w-sm"
                  initial={{ opacity: 0, x: '50%', scale: 0.95 }}
                  animate={{ opacity: 1, x: '0%', scale: 1 }}
                  exit={{ opacity: 0, x: '50%', scale: 0.95 }}
                  transition={{
                    type: 'spring',
                    damping: 25,
                    duration: 0.1,
                    stiffness: 500,
                  }}
                  onDragEnd={(_, info) => {
                    if (info.velocity.x >= 400) {
                      handleToastClose(id)
                    }
                  }}
                >
                  <Toast
                    {...toast}
                    open={true}
                    onClose={() => handleToastClose(id)}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  return useContext(ToastContext)
}
