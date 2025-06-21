import { Comment, DateTime, Description } from '@/features/todos/components/Todo'
import CommentForm from '@/features/todos/components/TodoDetail/parts/CommentForm'
import { Todo } from '@/features/todos/types'
import { Modal } from '@/features/ui'
import { Button } from '@/features/ui/buttons'
import { Checkbox } from '@/features/ui/inputs'
import { FC } from 'react'

interface TodoDetailProps {
    todo: Todo
    onCheck: (checked: boolean, id: string) => void
    onCommentConfirm: (comment: string, id: string) => void
    onDismiss: () => void
}

const TodoDetail: FC<TodoDetailProps> = ({ todo, onCheck, onCommentConfirm, onDismiss }) => {
    return (
        <Modal onDismiss={onDismiss}>
            <section className="flex flex-col p-[16px] gap-[16px]">
                <div className="flex gap-[16px]">
                    <DateTime
                        className="text-gray-400"
                        label="Created:"
                        timestamp={todo.createdTimestamp}
                    />
                    {todo.updatedTimestamp && (
                        <DateTime
                            className="text-gray-400"
                            label="Updated:"
                            timestamp={todo.updatedTimestamp}
                        />
                    )}
                </div>
                <Checkbox
                    checked={!!todo.successTimestamp}
                    id={todo.id}
                    label={todo.name}
                    onChange={onCheck}
                />
                <Description>{todo.description}</Description>
                {todo.successTimestamp ? (
                    <DateTime
                        className="text-green-600"
                        label="Done:"
                        timestamp={todo.successTimestamp}
                    />
                ) : (
                    <DateTime
                        className="text-orange-600"
                        label="Estimated time:"
                        timestamp={todo.estimatedTimestamp}
                    />
                )}
                {todo.comment ? (
                    <Comment>{todo.comment}</Comment>
                ) : (
                    <CommentForm id={todo.id} onConfirm={onCommentConfirm} />
                )}
                <Button variant="outlined" onClick={onDismiss}>
                    Close
                </Button>
            </section>
        </Modal>
    )
}

export default TodoDetail
