import { useKeyboardToggle } from '@/features/ui/hooks/useKeyboardToggle'
import { Checkmark } from '@/features/ui/icons'
import classNames from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes, MouseEvent } from 'react'

type AccessibilityProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface CheckboxProps {
    checked: boolean
    id: string
    label: string
    focusable?: boolean
    onChange: (checked: boolean, id: string) => void
}

const Checkbox: FC<CheckboxProps> = ({ checked, id, label, focusable, onChange }) => {
    const handleKeyDown = useKeyboardToggle(checked, id, onChange)

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault()

        onChange(!checked, id)
    }

    const accessibilityProps: AccessibilityProps = focusable
        ? { tabIndex: 0, 'aria-checked': checked, role: 'checkbox', onKeyDown: handleKeyDown }
        : { tabIndex: -1 }

    return (
        <label htmlFor={id} className="flex items-center gap-[10px]">
            <input
                readOnly
                id={id}
                className="sr-only"
                type="checkbox"
                checked={checked}
                tabIndex={-1}
            />
            <div
                className={classNames(
                    'size-6 flex items-center justify-center border-2 rounded-xs cursor-pointer shrink-0 transition',
                    {
                        'bg-green-600 border-green-600': checked,
                        'bg-white border-gray-500': !checked,
                    }
                )}
                onClick={handleClick}
                {...accessibilityProps}
            >
                {checked && <Checkmark />}
            </div>
            {label && <h3 className="text-xl truncate">{label}</h3>}
        </label>
    )
}

export default Checkbox
