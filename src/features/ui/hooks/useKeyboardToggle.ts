import { KeyboardEvent, useCallback } from 'react'

export const useKeyboardToggle = (
    checked: boolean,
    id: string,
    onToggle: (checked: boolean, id: string) => void
): ((event: KeyboardEvent) => void) => {
    return useCallback(
        (event: KeyboardEvent) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault()

                onToggle(!checked, id)
            }
        },
        [checked, id, onToggle]
    )
}
