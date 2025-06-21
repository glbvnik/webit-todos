'use client'

import AddTodoForm from '@/features/todos/components/AddTodoForm'
import TodoList from '@/features/todos/components/TodoList'
import { useTodos, useTodosActions } from '@/features/todos/contexts/Todos'
import { useSubmit } from '@/features/todos/pages/Todos/hooks/useSubmit'
import { NextPage } from 'next'

const TodosPage: NextPage = () => {
    const { todo, done } = useTodos()
    const { checkTodo } = useTodosActions()

    const handleSubmit = useSubmit()

    return (
        <main className="flex flex-col items-center my-[24px]">
            <AddTodoForm onSubmit={handleSubmit} />
            <section className="flex justify-center w-full px-[12px] mt-[24px] gap-[24px]">
                <TodoList header="TODO" todos={todo} onTodoCheck={checkTodo} />
                <TodoList header="DONE" todos={done} onTodoCheck={checkTodo} />
            </section>
        </main>
    )
}

export default TodosPage
