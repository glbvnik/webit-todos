import { schema } from '@/features/todos/components/AddTodoForm/form/schema'
import { z } from 'zod/v4'

export type Form = z.infer<typeof schema>
