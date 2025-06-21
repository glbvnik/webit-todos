'use client'

import { useDismissOnEscapeKey } from '@/features/ui/components/Modal/hooks/useDismissOnEscapeKey'
import { FC, MouseEvent, ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
    onDismiss: () => void
}

const Modal: FC<ModalProps> = ({ children, onDismiss }) => {
    useDismissOnEscapeKey(onDismiss)

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) onDismiss()
    }

    return (
        <div
            className="flex items-center justify-center bg-black/70 fixed inset-0 z-50"
            onClick={handleClick}
        >
            <div className="flex flex-col bg-white rounded max-h-[98%] w-full max-w-[600px]">
                {children}
            </div>
        </div>
    )
}

export default Modal
