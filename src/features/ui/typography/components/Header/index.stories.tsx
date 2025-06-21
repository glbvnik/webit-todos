import HeaderComponent from '@/features/ui/typography/components/Header'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'ui/typography/Header',
    component: HeaderComponent,
    args: { children: 'Header' },
} satisfies Meta<typeof HeaderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {}
