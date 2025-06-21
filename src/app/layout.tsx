import '@/styles/globals.css'
import { FC, ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
