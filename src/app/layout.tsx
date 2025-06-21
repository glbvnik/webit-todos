import NavigationHistoryProvider from '@/contexts/NavigationHistory'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { FC, ReactNode } from 'react'

export const metadata: Metadata = { title: 'Todos' }

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
