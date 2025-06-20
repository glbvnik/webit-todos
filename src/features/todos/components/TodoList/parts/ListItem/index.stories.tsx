import ListItemComponent from '@/features/todos/components/TodoList/parts/ListItem'
import { Meta, StoryObj } from '@storybook/nextjs'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

const nowTimestamp = dayjs().valueOf()

const meta = {
    title: 'todos/TodoList/ListItem',
    decorators: (Story) => (
        <div className="w-[250px]">
            <Story />
        </div>
    ),
    render: (args) => {
        const [, updateArgs] = useArgs()

        useEffect(() => {
            updateArgs({ checked: args.checked, isDone: args.checked })
        }, [args.checked, updateArgs])

        useEffect(() => {
            updateArgs({ checked: args.isDone, isDone: args.isDone })
        }, [args.isDone, updateArgs])

        const handleCheck = (checked: boolean) => updateArgs({ checked, isDone: checked })

        return <ListItemComponent {...args} onCheck={handleCheck} />
    },
    args: {
        checked: false,
        id: 'todo',
        name: 'Todo',
        description: 'Todo quite short description.',
        comment: 'Todo comment.',
        estimatedTimestamp: nowTimestamp,
        successTimestamp: nowTimestamp,
        onCheck: () => {},
        isDone: false,
    },
    argTypes: {
        id: { table: { disable: true } },
        estimatedTimestamp: { control: 'date', if: { arg: 'isDone', truthy: false } },
        successTimestamp: { control: 'date', if: { arg: 'isDone', truthy: true } },
        onCheck: { table: { disable: true } },
        isDone: { control: 'boolean' },
    },
} satisfies Meta<Parameters<typeof ListItemComponent>[0] & { isDone: boolean }>

export default meta

type Story = StoryObj<typeof meta>

export const ListItem: Story = {}
