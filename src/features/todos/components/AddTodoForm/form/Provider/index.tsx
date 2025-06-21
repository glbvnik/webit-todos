import { useForm } from '@/features/todos/components/AddTodoForm/form'
import { FC, ReactNode } from 'react'
import { FormProvider } from 'react-hook-form'

interface FormProps {
    children: ReactNode
}

const Form: FC<FormProps> = ({ children }) => {
    const methods = useForm()

    return <FormProvider {...methods}>{children}</FormProvider>
}

export default Form
