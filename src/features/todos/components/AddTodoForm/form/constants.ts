import dayjs from 'dayjs'

export enum FormKeys {
    Name = 'name',
    Description = 'description',
    EstimatedDate = 'estimatedDate',
    EstimatedTime = 'estimatedTime',
}

const now = dayjs()

export const defaultValues = {
    [FormKeys.Name]: '',
    [FormKeys.Description]: '',
    [FormKeys.EstimatedDate]: now.toISOString(),
    [FormKeys.EstimatedTime]: now.add(5, 'minutes').format('HH:mm'),
} as const
