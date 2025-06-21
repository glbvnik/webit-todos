import { IOptions } from 'tailwind-datepicker-react/types/Options'

const today = new Date()
today.setHours(0, 0, 0, 0)

export const id = 'datepicker'

export const options: IOptions = {
    inputIdProp: id,
    clearBtn: false,
    minDate: today,
    theme: {
        todayBtn: 'bg-orange-600',
        disabledText: 'bg-gray-200',
        selected: 'bg-orange-600',
        background: '',
        clearBtn: '',
        icons: '',
        text: '',
        input: '',
        inputIcon: '',
    },
} as const
