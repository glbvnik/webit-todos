import TextareaFieldWithLabelComponent from '@/features/ui/inputs/components/TextareaFieldWithLabel'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'ui/inputs/TextareaFieldWithLabel',
    component: TextareaFieldWithLabelComponent,
    args: { label: 'Label:', placeholder: 'Placeholder...' },
    argTypes: { textareaClassName: { table: { disable: true } } },
} satisfies Meta<typeof TextareaFieldWithLabelComponent>

export default meta

type Story = StoryObj<typeof meta>

export const TextareaFieldWithLabel: Story = {}
