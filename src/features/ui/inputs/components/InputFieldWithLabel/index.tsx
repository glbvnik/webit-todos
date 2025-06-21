import { InputField } from '@/features/ui/inputs'
import classNames from 'classnames'
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

interface InputFieldWithLabelProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    inputClassName?: string
}

const InputFieldWithLabel: FC<InputFieldWithLabelProps> = ({
    id,
    label,
    className,
    inputClassName,
    ...props
}) => {
    return (
        <label htmlFor={id} className={classNames('flex items-center gap-[8px]', className)}>
            <span>{label}</span>
            <InputField id={id} className={inputClassName} {...props} />
        </label>
    )
}

export default InputFieldWithLabel
