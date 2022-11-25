import { useEffect, useState } from 'react'

export const useDebounceValue = <T>(value: T, delay: number) => {
  const [state, setState] = useState<T>(value)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setState(value)
    }, delay)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [delay, value])

  return state
}
