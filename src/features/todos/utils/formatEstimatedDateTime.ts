import dayjs from 'dayjs'

export const formatEstimatedDateTime = (date: string, time: string) => {
    const [hour, minute] = time.split(':').map(Number)

    return dayjs(date).hour(hour).minute(minute).second(0).millisecond(0).toISOString()
}
