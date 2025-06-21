import InputFieldWithLabelComponent from '@/features/ui/inputs/components/InputFieldWithLabel'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'ui/inputs/InputFieldWithLabel',
    component: InputFieldWithLabelComponent,
    args: { label: 'Label:', placeholder: 'Placeholder...' },
    argTypes: { inputClassName: { table: { disable: true } } },
} satisfies Meta<typeof InputFieldWithLabelComponent>

export default meta

type Story = StoryObj<typeof meta>

export const InputFieldWithLabel: Story = {}
