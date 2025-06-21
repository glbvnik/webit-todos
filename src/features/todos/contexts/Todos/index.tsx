'use client'

import { Actions, initialState } from '@/features/todos/contexts/Todos/constants'
import { reducer } from '@/features/todos/contexts/Todos/reducer'
import { storage } from '@/features/todos/contexts/Todos/storage'
import { ActionsContextValue, ContextValue } from '@/features/todos/contexts/Todos/types'
import { Todo } from '@/features/todos/types'
import {
    FC,
    ReactNode,
    createContext,
    use,
    useCallback,
    useEffect,
    useMemo,
    useReducer,
} from 'react'
import invariant from 'tiny-invariant'

const Context = createContext<ContextValue | undefined>(undefined)
const ActionsContext = createContext<ActionsContextValue | undefined>(undefined)

interface TodosProviderProps {
    children: ReactNode
}

export const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const state = storage.load()

        if (state) dispatch({ type: Actions.Init, state })
    }, [])

    useEffect(() => {
        storage.save(state)
    }, [state])

    const todo = useMemo(
        () => state.todoIds.map((id) => state.byId[id]),
        [state.todoIds, state.byId]
    )
    const done = useMemo(
        () => state.doneIds.map((id) => state.byId[id]),
        [state.doneIds, state.byId]
    )

    const getTodoById = useCallback((id: string) => state.byId[id], [state.byId])

    const addTodo = useCallback((todo: Todo) => dispatch({ type: Actions.AddTodo, todo }), [])
    const checkTodo = useCallback(
        (checked: boolean, id: string) => dispatch({ type: Actions.CheckTodo, checked, id }),
        []
    )
    const commentTodo = useCallback(
        (comment: string, id: string) => dispatch({ type: Actions.CommentTodo, comment, id }),
        []
    )

    return (
        <Context.Provider value={{ todo, done, getTodoById }}>
            <ActionsContext.Provider value={{ addTodo, checkTodo, commentTodo }}>
                {children}
            </ActionsContext.Provider>
        </Context.Provider>
    )
}

export const useTodos = (): ContextValue => {
    const context = use(Context)

    invariant(context, '"useTodos" must be used within "TodosProvider"')

    return context
}

export const useTodosActions = (): ActionsContextValue => {
    const context = use(ActionsContext)

    invariant(context, '"useTodosActions" must be used within "TodosProvider"')

    return context
}
