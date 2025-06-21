import { FC } from 'react'

interface MessageProps {
    children: string
}

const Message: FC<MessageProps> = ({ children }) => {
    return (
        <p className="text-red-600 text-xs" role="alert">
            {children}
        </p>
    )
}

export default Message
