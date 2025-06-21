import ModalComponent from '@/features/ui/components/Modal'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'ui/Modal',
    component: ModalComponent,
    args: { children: <div className="p-[32px]">Modal Content</div>, onDismiss: () => {} },
    argTypes: { children: { table: { disable: true } }, onDismiss: { table: { disable: true } } },
} satisfies Meta<typeof ModalComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Modal: Story = {}
