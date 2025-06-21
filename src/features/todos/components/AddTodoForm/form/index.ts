import { FormKeys, defaultValues } from '@/features/todos/components/AddTodoForm/form/constants'
import { schema } from '@/features/todos/components/AddTodoForm/form/schema'
import { Form } from '@/features/todos/components/AddTodoForm/form/types'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    FieldErrors,
    UseFormRegister,
    UseFormReturn,
    useController,
    useFormContext,
    useForm as useRHFForm,
} from 'react-hook-form'

export const useForm = (): UseFormReturn<Form> => {
    return useRHFForm<Form>({ defaultValues, resolver: zodResolver(schema) })
}

export const useFormRegister = (): UseFormRegister<Form> => {
    const { register } = useFormContext<Form>()

    return register
}

export const useFormEstimatedDateField = (): [string, (value: string) => void] => {
    const {
        field: { value, onChange },
    } = useController<Form>({ name: FormKeys.EstimatedDate })

    return [value, onChange]
}

export const useFormErrors = (): FieldErrors<Form> => {
    const {
        formState: { errors },
    } = useFormContext<Form>()

    return errors
}

export const useFormSubmit = (onFormSubmit: (form: Form) => void) => {
    const { handleSubmit } = useFormContext<Form>()

    return handleSubmit(onFormSubmit)
}
