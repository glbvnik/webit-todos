import Header from '@/features/todos/components/TodoList/parts/Header'
import ListItem from '@/features/todos/components/TodoList/parts/ListItem'
import { Todo } from '@/features/todos/types'
import { FC, memo } from 'react'

interface TodoListProps {
    header: string
    todos: readonly Todo[]
    onTodoCheck: (checked: boolean, id: string) => void
}

const TodoList: FC<TodoListProps> = ({ header, todos, onTodoCheck }) => {
    return (
        <section className="w-full max-w-[325px]">
            <Header>{header}</Header>
            <ul className="flex flex-col mt-[16px] gap-[16px]">
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        checked={!!todo.successTimestamp}
                        id={todo.id}
                        name={todo.name}
                        description={todo.description}
                        comment={todo.comment}
                        estimatedTimestamp={todo.estimatedTimestamp}
                        successTimestamp={todo.successTimestamp}
                        onCheck={onTodoCheck}
                    />
                ))}
            </ul>
        </section>
    )
}

export default memo(TodoList)
