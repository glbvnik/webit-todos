import { TodosProvider } from '@/features/todos/contexts/Todos'
import { FC, ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return <TodosProvider>{children}</TodosProvider>
}

export default Layout
