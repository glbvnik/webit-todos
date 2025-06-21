import { Form } from '@/features/todos/components/AddTodoForm/form/types'
import { Todo } from '@/features/todos/types'
import { formatEstimatedDateTime } from '@/features/todos/utils/formatEstimatedDateTime'
import dayjs from 'dayjs'

export const createTodoFromForm = (form: Form): Todo => ({
    id: Math.random().toString(),
    name: form.name,
    description: form.description,
    createdTimestamp: dayjs().valueOf(),
    estimatedTimestamp: dayjs(
        formatEstimatedDateTime(form.estimatedDate, form.estimatedTime)
    ).valueOf(),
})
