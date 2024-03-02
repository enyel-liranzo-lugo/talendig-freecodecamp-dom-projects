import { type TodoId, type Todo as TodoType } from '../types/types'

interface Props extends TodoType {
  handleRemoveTodo: ({ id }: TodoId) => void
  handleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemoveTodo, handleCompletedTodo }) => {
  return (
    <div className='flex flex-row justify-between'>
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
          className={`cursor-pointer font-medium ${completed ? 'line-through text-gray-400' : ''}`}
        >
          {title}
        </label>
      </div>
      <button className='bg-red-700 p-0.5 px-1 text-white font-semibold rounded-md text-sm hover:bg-red-900 transition-colors' onClick={() => {
        handleRemoveTodo({ id })
      }}>
        Delete
      </button>
    </div>
  )
}
