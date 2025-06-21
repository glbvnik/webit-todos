import AddTodoFormComponent from '@/features/todos/components/AddTodoForm'
import { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
    title: 'todos/AddTodoForm',
    decorators: (Story) => (
        <div className="flex justify-center">
            <Story />
        </div>
    ),
    component: AddTodoFormComponent,
    args: { onSubmit: (form) => alert(JSON.stringify(form, null, 2)) },
    argTypes: { onSubmit: { table: { disable: true } } },
} satisfies Meta<typeof AddTodoFormComponent>

export default meta

type Story = StoryObj<typeof meta>

export const AddTodoForm: Story = {}
