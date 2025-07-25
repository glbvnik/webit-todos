import { Actions } from '@/features/todos/contexts/Todos/constants'
import { Todo } from '@/features/todos/types'

export interface State {
    byId: Record<string, Todo>
    todoIds: string[]
    doneIds: string[]
}

export type Action =
    | { type: Actions.Init; state: State }
    | { type: Actions.AddTodo; todo: Todo }
    | { type: Actions.CheckTodo; checked: boolean; id: string }
    | { type: Actions.CommentTodo; comment: string; id: string }

export interface ContextValue {
    todo: Todo[]
    done: Todo[]
    getTodoById: (id: string) => Todo
}

export interface ActionsContextValue {
    addTodo: (todo: Todo) => void
    checkTodo: (checked: boolean, id: string) => void
    commentTodo: (comment: string, id: string) => void
}
