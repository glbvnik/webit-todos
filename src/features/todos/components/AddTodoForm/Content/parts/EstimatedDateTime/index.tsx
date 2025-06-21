import Datepicker from '@/features/todos/components/AddTodoForm/Content/parts/EstimatedDateTime/parts/Datepicker'
import { useFormRegister } from '@/features/todos/components/AddTodoForm/form'
import { FormKeys } from '@/features/todos/components/AddTodoForm/form/constants'
import { Timepicker } from '@/features/ui/inputs'
import { FC } from 'react'

const EstimatedDateTime: FC = () => {
    const register = useFormRegister()

    return (
        <div className="flex items-end mt-[16px] gap-[8px]">
            <Datepicker />
            <Timepicker required label="Estimated time:" {...register(FormKeys.EstimatedTime)} />
        </div>
    )
}

export default EstimatedDateTime
