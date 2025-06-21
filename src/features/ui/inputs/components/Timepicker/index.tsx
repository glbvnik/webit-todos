import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

interface TimepickerProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
}

const Timepicker: FC<TimepickerProps> = ({ id, label, ...props }) => {
    return (
        <div className="w-[120px]">
            <label htmlFor={id} className="block text-sm mb-[4px]">
                {label}
            </label>
            <input
                id={id}
                className="bg-gray-50 border rounded-md border-gray-300 focus:border-orange-600 text-sm outline-none w-full p-[10px]"
                type="time"
                {...props}
            />
        </div>
    )
}

export default Timepicker
