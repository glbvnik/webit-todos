import { TodosProvider } from '@/features/todos/contexts/Todos'
import { FC, ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
    todoModal: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, todoModal }) => {
    return (
        <TodosProvider>
            {children}
            {todoModal}
        </TodosProvider>
    )
}

export default Layout
