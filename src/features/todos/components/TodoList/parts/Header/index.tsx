import { FC } from 'react'

interface HeaderProps {
    children: string
}

const Header: FC<HeaderProps> = ({ children }) => {
    return <h2 className="text-2xl">{children}</h2>
}

export default Header
