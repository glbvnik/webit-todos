import InputFieldComponent from '@/features/ui/inputs/components/InputField'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'ui/inputs/InputField',
    component: InputFieldComponent,
    args: { placeholder: 'Placeholder...' },
} satisfies Meta<typeof InputFieldComponent>

export default meta

type Story = StoryObj<typeof meta>

export const InputField: Story = {}
