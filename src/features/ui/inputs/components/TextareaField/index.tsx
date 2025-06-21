import classNames from 'classnames'
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react'

const TextareaField: FC<
    DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
> = ({ className, ...props }) => {
    return (
        <textarea
            className={classNames(
                'bg-gray-50 border-2 border-gray-300 focus:border-orange-600 rounded text-sm outline-none p-[8px]',
                className
            )}
            {...props}
        />
    )
}

export default TextareaField
