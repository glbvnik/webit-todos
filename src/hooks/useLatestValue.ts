import { RefObject, useRef } from 'react'

export const useLatestValue = <T>(value: T): RefObject<T> => {
    const ref = useRef<T>(value)

    ref.current = value

    return ref
}
