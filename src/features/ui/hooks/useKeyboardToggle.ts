import { KeyboardEvent, useCallback } from 'react'

export const useKeyboardToggle = (
    checked: boolean,
    onToggle: (checked: boolean) => void
): ((event: KeyboardEvent) => void) => {
    return useCallback(
        (event: KeyboardEvent) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault()

                onToggle(!checked)
            }
        },
        [checked, onToggle]
    )
}
