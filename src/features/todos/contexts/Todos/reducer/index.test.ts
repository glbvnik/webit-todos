import { Actions } from '@/features/todos/contexts/Todos/constants'
import { reducer } from '@/features/todos/contexts/Todos/reducer'
import { Action, State } from '@/features/todos/contexts/Todos/types'
import { doneTodo1, newTodo1 } from '@/features/todos/fixtures'
import dayjs from 'dayjs'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

const emptyState: State = {
    byId: {},
    todoIds: [],
    doneIds: [],
}

describe('reducer', () => {
    const nowTimestamp = dayjs().valueOf()

    beforeAll(() => {
        vi.useFakeTimers()
        vi.setSystemTime(nowTimestamp)
    })

    afterAll(() => {
        vi.useRealTimers()
    })

    it('handles Init action', () => {
        const initialState: State = {
            byId: { newTodo1 },
            todoIds: [newTodo1.id],
            doneIds: [],
        }

        const action: Action = { type: Actions.Init, state: initialState }

        const state = reducer(emptyState, action)

        expect(state).toBe(initialState)
    })

    it('handles AddTodo action', () => {
        const action: Action = { type: Actions.AddTodo, todo: newTodo1 }

        const state = reducer(emptyState, action)

        expect(state.byId).toHaveProperty(newTodo1.id, newTodo1)
        expect(state.todoIds).toEqual([newTodo1.id])
        expect(state.doneIds).toEqual([])
    })

    describe('handles CheckTodo action', () => {
        const initialState = {
            byId: { [newTodo1.id]: newTodo1 },
            todoIds: [newTodo1.id],
            doneIds: [],
        }

        it('moves from "todo" to "done" when checked', () => {
            const action: Action = { type: Actions.CheckTodo, checked: true, id: newTodo1.id }

            const state = reducer(initialState, action)

            expect(state.byId[newTodo1.id].updatedTimestamp).toBe(nowTimestamp)
            expect(state.byId[newTodo1.id].successTimestamp).toBe(nowTimestamp)

            expect(state.todoIds).toEqual([])
            expect(state.doneIds).toEqual([newTodo1.id])
        })

        it('moves from "done" to "todo" when unchecked', () => {
            const initialState = {
                byId: { [doneTodo1.id]: doneTodo1 },
                todoIds: [],
                doneIds: [doneTodo1.id],
            }

            const action: Action = { type: Actions.CheckTodo, checked: false, id: doneTodo1.id }

            const state = reducer(initialState, action)

            expect(state.byId[doneTodo1.id].updatedTimestamp).toBe(nowTimestamp)
            expect(state.byId[doneTodo1.id].successTimestamp).toBeUndefined()

            expect(state.todoIds).toEqual([doneTodo1.id])
            expect(state.doneIds).toEqual([])
        })

        it('returns original state if todo not found', () => {
            const initialState = {
                byId: { [newTodo1.id]: newTodo1 },
                todoIds: [newTodo1.id],
                doneIds: [],
            }

            const action: Action = { type: Actions.CheckTodo, checked: true, id: 'missing' }

            const state = reducer(initialState, action)

            expect(state).toBe(initialState)
        })
    })

    it('handles CommentTodo action', () => {
        const initialState: State = {
            byId: { [newTodo1.id]: newTodo1 },
            todoIds: [newTodo1.id],
            doneIds: [],
        }

        const comment = 'This is a test comment'

        const action: Action = { type: Actions.CommentTodo, comment, id: newTodo1.id }

        const state = reducer(initialState, action)

        expect(state.byId[newTodo1.id].comment).toBe(comment)
        expect(state.byId[newTodo1.id].updatedTimestamp).toBe(nowTimestamp)
        expect(state.todoIds).toEqual(initialState.todoIds)
        expect(state.doneIds).toEqual(initialState.doneIds)
    })
})
