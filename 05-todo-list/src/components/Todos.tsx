import { Todo } from './Todo'
import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types/types'

interface Props {
  todos: ListOfTodos
  handleRemoveTodo: ({ id }: TodoId) => void
  handleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, handleRemoveTodo, handleCompletedTodo }) => {
  return (
    <div>
      <h2>My tasks</h2>
      <div>
        <ul>
          {todos.map(todo =>
            <li key={todo.id}>
              <Todo
                id={todo.id}
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                handleRemoveTodo={handleRemoveTodo}
                handleCompletedTodo={handleCompletedTodo}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
