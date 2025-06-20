import classNames from 'classnames'
import dayjs from 'dayjs'
import { FC } from 'react'

interface DateTimeProps {
    className?: string
    label: string
    timestamp: number
}

const DateTime: FC<DateTimeProps> = ({ className, label, timestamp }) => {
    return (
        <div className={classNames('flex text-gray-600 text-xs gap-1', className)}>
            <span>{label}</span>
            <time dateTime={dayjs(timestamp).format('YYYY-MM-DD HH:mm')}>
                {dayjs(timestamp).format('MMM D HH:mm')}
            </time>
        </div>
    )
}

export default DateTime
