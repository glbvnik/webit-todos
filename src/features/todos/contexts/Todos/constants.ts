import { State } from '@/features/todos/contexts/Todos/types'

export enum Actions {
    Init = 'Init',
    AddTodo = 'AddTodo',
    CheckTodo = 'CheckTodo',
}

export const initialState: State = {
    byId: {},
    todoIds: [],
    doneIds: [],
} as const
