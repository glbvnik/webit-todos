import { Form } from '@/features/todos/components/AddTodoForm/form/types'
import { useTodosActions } from '@/features/todos/contexts/Todos'
import { createTodoFromForm } from '@/features/todos/pages/Todos/utils/createTodoFromForm'
import { useCallback } from 'react'

export const useSubmit = (): ((form: Form) => void) => {
    const { addTodo } = useTodosActions()

    return useCallback((form: Form) => addTodo(createTodoFromForm(form)), [addTodo])
}
