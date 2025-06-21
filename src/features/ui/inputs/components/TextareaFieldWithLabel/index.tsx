import { TextareaField } from '@/features/ui/inputs'
import classNames from 'classnames'
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react'

interface TextareaFieldWithLabelProps
    extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label: string
    textareaClassName?: string
}

const TextareaFieldWithLabel: FC<TextareaFieldWithLabelProps> = ({
    id,
    label,
    className,
    textareaClassName,
    ...props
}) => {
    return (
        <label htmlFor={id} className={classNames('flex flex-col gap-[4px]', className)}>
            <span>{label}</span>
            <TextareaField id={id} className={textareaClassName} {...props} />
        </label>
    )
}

export default TextareaFieldWithLabel
