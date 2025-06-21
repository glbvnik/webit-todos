import { useEffect } from 'react'

export const useDismissOnEscapeKey = (onDismiss: () => void) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return

            event.preventDefault()

            onDismiss()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onDismiss])
}
