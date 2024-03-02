import { type TodoId, type Todo as TodoType } from '../types/types'

interface Props extends TodoType {
  handleRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemoveTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        value={title}
        checked={completed}
      />
      <label htmlFor={id}>
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
