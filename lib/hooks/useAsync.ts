import { wait } from 'lib/wait'
import { useCallback, useState } from 'react'

const PENDING_TOLERANCE = 100
const MINIMAL_PENDING = 500

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PromiseReturnFN = (...args: any[]) => Promise<any>
export type AsyncStatus = 'idle' | 'pending' | 'success' | 'error'

export const useAsync = <T extends PromiseReturnFN>(
  fn: T,
  tolerance = PENDING_TOLERANCE,
  minimalPending = MINIMAL_PENDING
) => {
  const [status, setStatus] = useState<AsyncStatus>('idle')

  const callback = useCallback(
    async (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
      const pendingTimeout = window.setTimeout(() => {
        setStatus('pending')
      }, tolerance)

      let result
      const start = performance.now()

      try {
        result = await fn(...args)
      } catch (e: unknown) {
        result = e
      }

      window.clearTimeout(pendingTimeout)

      const now = performance.now()
      const timeSpent = now - start

      if (tolerance < timeSpent && timeSpent < minimalPending) {
        await wait(minimalPending - timeSpent)
      }

      if (result instanceof Error) {
        setStatus('error')
        throw result
      }

      setStatus('success')

      return result
    },
    [fn, minimalPending, tolerance]
  )

  return [status, callback] as const
}
