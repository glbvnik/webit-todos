import { Todo } from '@/features/todos/types'
import dayjs from 'dayjs'

const nowTimestamp = dayjs().valueOf()

const todo1: Todo = {
    id: 'todo-1',
    name: 'Todo 1',
    description: 'Mauris pharetra tristique odio, et sodales mi efficitur ac.',
    comment: 'Quisque tristique, nunc ut commodo malesuada.',
    createdTimestamp: nowTimestamp,
    estimatedTimestamp: nowTimestamp,
} as const

const todo2: Todo = {
    id: 'todo-2',
    name: 'Todo 2',
    description:
        'Quisque libero est, imperdiet at eros et, porttitor auctor sem. In tincidunt, nibh pulvinar euismod mollis, felis tellus aliquet velit, auctor consequat ex sem id nunc.',
    comment: 'Sed fringilla ornare risus, vel porttitor lorem tempor id.',
    createdTimestamp: nowTimestamp,
    updatedTimestamp: nowTimestamp,
    estimatedTimestamp: nowTimestamp,
} as const

const todo3: Todo = {
    id: 'todo-3',
    name: 'Todo 3',
    description:
        'Vivamus tincidunt, lacus a efficitur efficitur, odio tortor viverra mi, pharetra interdum nunc orci euismod enim.',
    comment: 'Aliquam vestibulum tellus eget mi vestibulum, sed laoreet metus lacinia.',
    createdTimestamp: nowTimestamp,
    updatedTimestamp: nowTimestamp,
    estimatedTimestamp: nowTimestamp,
    successTimestamp: nowTimestamp,
} as const

const todo4: Todo = {
    id: 'todo-4',
    name: 'Todo 4',
    description:
        'Duis imperdiet mauris enim, sed ultrices mauris fringilla ut. Donec vitae placerat ante.',
    comment:
        'Vivamus sed urna ultricies, accumsan nulla vitae, tincidunt ipsum. Morbi congue pharetra luctus. Nam sed ante nec libero semper placerat.',
    createdTimestamp: nowTimestamp,
    updatedTimestamp: nowTimestamp,
    estimatedTimestamp: nowTimestamp,
    successTimestamp: nowTimestamp,
} as const

export const todos = [todo1, todo2, todo3, todo4] as const
