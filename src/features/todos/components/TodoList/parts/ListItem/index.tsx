import { Comment, DateTime, Description } from '@/features/todos/components/Todo'
import { useKeyboardToggle } from '@/features/ui/hooks/useKeyboardToggle'
import { Checkbox } from '@/features/ui/inputs'
import { FC } from 'react'

interface ListItemProps {
    checked: boolean
    id: string
    name: string
    description: string
    comment?: string
    estimatedTimestamp: number
    successTimestamp?: number
    onCheck: (checked: boolean) => void
}

const ListItem: FC<ListItemProps> = ({
    checked,
    id,
    name,
    description,
    comment,
    estimatedTimestamp,
    successTimestamp,
    onCheck,
}) => {
    const handleKeyDown = useKeyboardToggle(checked, onCheck)

    return (
        <li
            className="flex flex-col border-2 border-gray-200 focus:border-orange-600 rounded list-none outline-none p-[12px] gap-[12px]"
            tabIndex={0}
            aria-checked={checked}
            role="checkbox"
            onKeyDown={handleKeyDown}
        >
            <Checkbox checked={checked} id={id} label={name} onChange={onCheck} />
            <Description className="line-clamp-2">{description}</Description>
            {successTimestamp ? (
                <DateTime className="text-green-600" label="Done:" timestamp={successTimestamp} />
            ) : (
                <DateTime
                    className="text-orange-600"
                    label="Estimated time:"
                    timestamp={estimatedTimestamp}
                />
            )}
            {comment && <Comment className="line-clamp-2">{comment}</Comment>}
        </li>
    )
}

export default ListItem
