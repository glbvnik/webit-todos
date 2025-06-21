import { Button } from '@/features/ui/buttons'
import { TextareaFieldWithLabel } from '@/features/ui/inputs'
import { ChangeEvent, FC, useRef } from 'react'

interface CommentFormProps {
    id: string
    onConfirm: (comment: string, id: string) => void
}

const CommentForm: FC<CommentFormProps> = ({ id, onConfirm }) => {
    const commentRef = useRef('')

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
        (commentRef.current = event.target.value)

    const handleClick = () => onConfirm(commentRef.current, id)

    return (
        <>
            <TextareaFieldWithLabel label="Comment:" onChange={handleChange} />
            <Button onClick={handleClick}>Confirm</Button>
        </>
    )
}

export default CommentForm
