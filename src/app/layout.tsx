import NavigationHistoryProvider from '@/contexts/NavigationHistory'
import '@/styles/globals.css'
import { FC, ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html>
            <body>
                <NavigationHistoryProvider>{children}</NavigationHistoryProvider>
            </body>
        </html>
    )
}

export default RootLayout
