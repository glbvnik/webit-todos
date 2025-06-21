import classNames from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

const Header: FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({
    className,
    ...props
}) => {
    return <h2 className={classNames('text-3xl', className)} {...props} />
}

export default Header
