import classNames from 'classnames'
import { FC } from 'react'

interface DescriptionProps {
    children: string
    className?: string
}

const Description: FC<DescriptionProps> = ({ children, className }) => {
    return <p className={classNames('text-sm', className)}>{children}</p>
}

export default Description
