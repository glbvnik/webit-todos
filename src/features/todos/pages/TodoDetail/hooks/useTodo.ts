import { useTodos } from '@/features/todos/contexts/Todos'
import { Todo } from '@/features/todos/types'
import { useEffect, useState } from 'react'

export const useTodo = (id: string): Todo | undefined => {
    const { getTodoById } = useTodos()

    const [todo, setTodo] = useState<Todo>(getTodoById(id))

    useEffect(() => {
        setTodo(getTodoById(id))
    }, [id, getTodoById])

    return todo
}
