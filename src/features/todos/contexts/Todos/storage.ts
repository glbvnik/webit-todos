import { State } from '@/features/todos/contexts/Todos/types'

const key = 'todos'

export const storage = {
    load: (): State | undefined => {
        const stored = localStorage.getItem(key)

        if (!stored) return undefined

        try {
            return JSON.parse(stored) as State
        } catch (e) {
            console.error('Failed to parse todos from local storage', e)

            return undefined
        }
    },
    save: (state: State): void => {
        try {
            localStorage.setItem(key, JSON.stringify(state))
        } catch (e) {
            console.error('Failed to save todos to local storage', e)
        }
    },
} as const
