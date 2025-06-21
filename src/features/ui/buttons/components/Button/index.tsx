import classNames from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'contained' | 'outlined'
}

const Button: FC<ButtonProps> = ({ variant = 'contained', className, ...props }) => {
    return (
        <button
            className={classNames(
                'border-2 border-amber-600 hover:border-amber-700 active:border-amber-800 rounded truncate max-w-full p-[8px] transition-colors',
                {
                    'bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white':
                        variant === 'contained',
                },
                {
                    'text-amber-600 hover:text-amber-700 active:text-amber-800':
                        variant === 'outlined',
                },
                className
            )}
            {...props}
        />
    )
}

export default Button
