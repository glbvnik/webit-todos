import { FormKeys } from '@/features/todos/components/AddTodoForm/form/constants'
import dayjs from 'dayjs'
import { z } from 'zod/v4'

export const schema = z
    .object({
        [FormKeys.Name]: z.string().nonempty({ error: 'Name must be non-empty.' }),
        [FormKeys.Description]: z.string().nonempty({ error: 'Description must be non-empty.' }),
        [FormKeys.EstimatedDate]: z.iso.datetime({ offset: true }),
        [FormKeys.EstimatedTime]: z.string(),
    })
    .refine(
        ({ estimatedDate, estimatedTime }) => {
            const [hour, minute] = estimatedTime.split(':').map(Number)

            return dayjs(
                dayjs(estimatedDate).hour(hour).minute(minute).second(0).millisecond(0)
            ).isAfter(dayjs())
        },
        { error: 'Estimated date time must not be in the past.' }
    )
