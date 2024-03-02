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
      <h2 className='text-center text-md font-bold my-5'>My Tasks</h2>
      <div>
        <ul className='h-[200px] overflow-y-auto border-2 border-slate-900 p-1 rounded-md'>
          {todos.map(todo =>
            <li className='flex flex-col mb-2 align-middle' key={todo.id}>
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
