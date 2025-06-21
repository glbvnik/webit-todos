import { FormKeys } from '@/features/todos/components/AddTodoForm/form/constants'
import { formatEstimatedDateTime } from '@/features/todos/utils/formatEstimatedDateTime'
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
            return dayjs(formatEstimatedDateTime(estimatedDate, estimatedTime)).isAfter(dayjs())
        },
        { error: 'Estimated date time must not be in the past.' }
    )
