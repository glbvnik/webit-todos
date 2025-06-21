import TimepickerComponent from '@/features/ui/inputs/components/Timepicker'
import { Meta, StoryObj } from '@storybook/nextjs'
import { ChangeEvent } from 'react'
import { useArgs } from 'storybook/preview-api'

const meta = {
    title: 'ui/inputs/Timepicker',
    render: (args) => {
        const [, updateArgs] = useArgs()

        const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
            updateArgs({ value: event.target.value })

        return <TimepickerComponent {...args} onChange={handleChange} />
    },
    args: { id: 'timepicker', label: 'Select time:', value: '12:00' },
    argTypes: { id: { table: { disable: true } }, value: { table: { disable: true } } },
} satisfies Meta<typeof TimepickerComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Timepicker: Story = {}
