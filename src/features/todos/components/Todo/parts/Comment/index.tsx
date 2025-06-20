import classNames from 'classnames'
import { FC } from 'react'

interface DescriptionProps {
    children: string
    className?: string
}

const Comment: FC<DescriptionProps> = ({ children, className }) => {
    return <p className={classNames('text-gray-700 text-xs', className)}>{children}</p>
}

export default Comment
