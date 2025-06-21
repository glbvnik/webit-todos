import Content from '@/features/todos/components/AddTodoForm/Content'
import Form from '@/features/todos/components/AddTodoForm/form/Provider'
import { OnSubmit } from '@/features/todos/components/AddTodoForm/types'
import { FC } from 'react'

interface AddTodoFormProps {
    onSubmit: OnSubmit
}

const AddTodoForm: FC<AddTodoFormProps> = ({ onSubmit }) => {
    return (
        <Form>
            <Content onSubmit={onSubmit} />
        </Form>
    )
}

export default AddTodoForm
