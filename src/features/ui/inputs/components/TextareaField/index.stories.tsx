import TextareaFieldComponent from '@/features/ui/inputs/components/TextareaField'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'ui/inputs/TextareaField',
    component: TextareaFieldComponent,
    args: { placeholder: 'Placeholder...' },
} satisfies Meta<typeof TextareaFieldComponent>

export default meta

type Story = StoryObj<typeof meta>

export const TextareaField: Story = {}
