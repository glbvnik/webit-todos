import TodoListComponent from '@/features/todos/components/TodoList'
import { todos } from '@/features/todos/fixtures'
import { Meta, StoryObj } from '@storybook/nextjs'
import dayjs from 'dayjs'
import { useArgs } from 'storybook/preview-api'

const meta = {
    title: 'todos/TodoList',
    component: TodoListComponent,
    render: (args) => {
        const [, updateArgs] = useArgs()

        const handleTodoCheck = (checked: boolean, id: string) => {
            const now = dayjs().valueOf()

            const todos = args.todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          successTimestamp: checked ? now : undefined,
                          updatedTimestamp: now,
                      }
                    : todo
            )

            updateArgs({ todos })
        }

        return <TodoListComponent {...args} onTodoCheck={handleTodoCheck} />
    },
    args: { header: 'All todos', todos, onTodoCheck: () => {} },
    argTypes: { todos: { table: { disable: true } }, onTodoCheck: { table: { disable: true } } },
} satisfies Meta<typeof TodoListComponent>

export default meta

type Story = StoryObj<typeof meta>

export const TodoList: Story = {}
