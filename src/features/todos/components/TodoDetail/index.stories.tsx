import TodoDetailComponent from '@/features/todos/components/TodoDetail'
import { doneTodo1 } from '@/features/todos/fixtures'
import { Meta, StoryObj } from '@storybook/nextjs'
import { useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

const todo = { ...doneTodo1 }
delete todo.comment

const meta = {
    title: 'todos/TodoDetail',
    component: TodoDetailComponent,
    render: ({ withComment, ...args }) => {
        const [, updateArgs] = useArgs()

        useEffect(() => {
            updateArgs({ todo: withComment ? { ...todo, comment: 'With some comment...' } : todo })
        }, [withComment, updateArgs])

        return <TodoDetailComponent {...args} />
    },
    args: {
        todo,
        onCheck: () => {},
        onDismiss: () => {},
        onCommentConfirm: () => {},
        withComment: false,
    },
    argTypes: {
        todo: { table: { disable: true } },
        onCheck: { table: { disable: true } },
        onCommentConfirm: { table: { disable: true } },
        onDismiss: { table: { disable: true } },
    },
} satisfies Meta<Parameters<typeof TodoDetailComponent>[0] & { withComment: boolean }>

export default meta

type Story = StoryObj<typeof meta>

export const TodoDetail: Story = {}
