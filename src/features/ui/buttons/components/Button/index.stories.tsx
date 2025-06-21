import ButtonComponent from '@/features/ui/buttons/components/Button'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'ui/buttons/Button',
    decorators: (Story) => (
        <div className="w-[250px]">
            <Story />
        </div>
    ),
    component: ButtonComponent,
    args: { children: 'Button' },
} satisfies Meta<typeof ButtonComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}
