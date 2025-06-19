import { Checkmark } from '@/features/ui/icons'
import classNames from 'classnames'
import { FC, KeyboardEvent } from 'react'

interface CheckboxProps {
    checked: boolean
    id: string
    label: string
    onChange: (checked: boolean) => void
}

const Checkbox: FC<CheckboxProps> = ({ checked, id, label, onChange }) => {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault()

            onChange(!checked)
        }
    }

    return (
        <label htmlFor={id} className="flex items-center gap-[10px]">
            <input readOnly id={id} className="sr-only" type="checkbox" checked={checked} />
            <div
                className={classNames(
                    'size-6 flex items-center justify-center border-2 rounded-xs cursor-pointer shrink-0 transition',
                    {
                        'bg-green-600 border-green-600': checked,
                        'bg-white border-gray-500': !checked,
                    }
                )}
                aria-checked={checked}
                role="checkbox"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={() => onChange(!checked)}
            >
                {checked && <Checkmark />}
            </div>
            {label && <h3 className="text-xl truncate">{label}</h3>}
        </label>
    )
}

export default Checkbox
