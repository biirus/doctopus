import { useCallback, useState } from 'react'

export const useToggle = (initial: boolean) => {
  const [state, setState] = useState(initial)

  const toggle = useCallback((value?: unknown) => {
    if (typeof value === 'boolean') {
      setState(value)
    } else {
      setState((current) => !current)
    }
  }, [])

  return [state, toggle] as const
}
