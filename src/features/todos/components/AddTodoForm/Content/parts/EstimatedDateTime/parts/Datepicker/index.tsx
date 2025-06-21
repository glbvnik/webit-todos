import {
    id,
    options,
} from '@/features/todos/components/AddTodoForm/Content/parts/EstimatedDateTime/parts/Datepicker/constants'
import { useFormEstimatedDateField } from '@/features/todos/components/AddTodoForm/form'
import dayjs from 'dayjs'
import { FC, useState } from 'react'
import TailwindDatepicker from 'tailwind-datepicker-react'

const Datepicker: FC = () => {
    const [value, onChange] = useFormEstimatedDateField()

    const [isShow, setIsShow] = useState(false)

    const handleChange = (date: Date) => onChange(dayjs(date).toISOString())

    return (
        <div>
            <label htmlFor={id} className="block text-sm mb-[4px]">
                Estimated date:
            </label>
            <TailwindDatepicker
                options={options}
                show={isShow}
                setShow={setIsShow}
                value={new Date(value)}
                onChange={handleChange}
            />
        </div>
    )
}

export default Datepicker
