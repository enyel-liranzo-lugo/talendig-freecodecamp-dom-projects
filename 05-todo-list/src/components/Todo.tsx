import { type TodoId, type Todo as TodoType } from '../types/types'

interface Props extends TodoType {
  handleRemoveTodo: ({ id }: TodoId) => void
  handleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemoveTodo, handleCompletedTodo }) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        value={title}
        checked={completed}
        onChange={(e) => {
          handleCompletedTodo({ id, completed: e.target.checked })
        }}
      />
      <label
        htmlFor={id}
        className={`checkbox ${completed ? 'line-through text-gray-400' : ''}`}
      >
        {title}
      </label>
      <button onClick={() => {
        handleRemoveTodo({ id })
      }}>
        Delete
      </button>
    </div>
  )
}
