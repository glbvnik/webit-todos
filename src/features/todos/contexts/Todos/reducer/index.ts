import { Actions } from '@/features/todos/contexts/Todos/constants'
import { Action, State } from '@/features/todos/contexts/Todos/types'
import { Todo } from '@/features/todos/types'
import dayjs from 'dayjs'

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case Actions.Init: {
            return action.state
        }
        case Actions.AddTodo: {
            return {
                ...state,
                byId: { ...state.byId, [action.todo.id]: action.todo },
                todoIds: [action.todo.id, ...state.todoIds],
            }
        }
        case Actions.CheckTodo: {
            const { checked, id } = action

            const todo = state.byId[id]

            if (!todo) return state

            const nowTimestamp = dayjs().valueOf()

            const updatedTodo: Todo = {
                ...todo,
                updatedTimestamp: nowTimestamp,
                successTimestamp: checked ? nowTimestamp : undefined,
            }

            const byId = { ...state.byId, [id]: updatedTodo }

            if (checked) {
                return {
                    byId,
                    todoIds: state.todoIds.filter((todoId) => todoId !== id),
                    doneIds: [id, ...state.doneIds],
                }
            }

            return {
                byId,
                todoIds: [id, ...state.todoIds],
                doneIds: state.doneIds.filter((doneId) => doneId !== id),
            }
        }
        default:
            return state
    }
}
