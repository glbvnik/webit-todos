import Errors from '@/features/todos/components/AddTodoForm/Content/parts/Errors'
import EstimatedDateTime from '@/features/todos/components/AddTodoForm/Content/parts/EstimatedDateTime'
import {
    useFormRegister,
    useFormReset,
    useFormSubmit,
} from '@/features/todos/components/AddTodoForm/form'
import { FormKeys } from '@/features/todos/components/AddTodoForm/form/constants'
import { OnSubmit } from '@/features/todos/components/AddTodoForm/types'
import { Button } from '@/features/ui/buttons'
import { InputFieldWithLabel, TextareaFieldWithLabel } from '@/features/ui/inputs'
import { Header } from '@/features/ui/typography'
import { FC } from 'react'

interface ContentProps {
    onSubmit: OnSubmit
}

const Content: FC<ContentProps> = ({ onSubmit }) => {
    const register = useFormRegister()

    const reset = useFormReset()

    const handleSubmit = useFormSubmit((form) => {
        onSubmit(form)

        reset()
    })

    return (
        <form className="flex flex-col w-full max-w-[360px] px-[8px]">
            <Header className="self-center mb-[24px]">Add your Todo ✍️</Header>
            <InputFieldWithLabel
                required
                label="Name:"
                inputClassName="w-full"
                {...register(FormKeys.Name)}
            />
            <TextareaFieldWithLabel
                required
                label="Description:"
                className="mt-[16px]"
                rows={3}
                {...register(FormKeys.Description)}
            />
            <EstimatedDateTime />
            <Button className="mt-[16px]" onClick={handleSubmit}>
                Add
            </Button>
            <Errors />
        </form>
    )
}

export default Content
