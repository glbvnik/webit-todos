import Message from '@/features/todos/components/AddTodoForm/Content/parts/Errors/parts/Message'
import { useFormErrors } from '@/features/todos/components/AddTodoForm/form'
import { FC } from 'react'

const Errors: FC = () => {
    const errors = useFormErrors()

    return (
        <div className="flex flex-wrap mt-[12px] gap-[4px]">
            {Object.values(errors)
                .filter(({ message }) => message)
                .map(({ message }, index) => (
                    <Message key={index}>{message!}</Message>
                ))}
        </div>
    )
}

export default Errors
