import classNames from 'classnames'
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

const InputField: FC<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...props }) => {
    return (
        <input
            className={classNames(
                'border-b-2 border-gray-400 focus:border-orange-600 text-md placeholder-gray-400 focus:outline-none transition-colors p-[4px]',
                className
            )}
            {...props}
        />
    )
}

export default InputField
