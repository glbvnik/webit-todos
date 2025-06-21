'use client'

import TodoDetail from '@/features/todos/components/TodoDetail'
import { useTodosActions } from '@/features/todos/contexts/Todos'
import { useDismiss } from '@/features/todos/pages/TodoDetail/hooks/useDismiss'
import { useTodo } from '@/features/todos/pages/TodoDetail/hooks/useTodo'
import { NextPage } from 'next'
import { use } from 'react'

interface TodoDetailPageProps {
    params: Promise<{ id: string }>
}

const TodoDetailPage: NextPage<TodoDetailPageProps> = ({ params }) => {
    const { id } = use(params)

    const todo = useTodo(id)

    const { checkTodo, commentTodo } = useTodosActions()

    const handleDismiss = useDismiss()

    if (!todo) return

    return (
        <TodoDetail
            todo={todo}
            onCheck={checkTodo}
            onDismiss={handleDismiss}
            onCommentConfirm={commentTodo}
        />
    )
}

export default TodoDetailPage
