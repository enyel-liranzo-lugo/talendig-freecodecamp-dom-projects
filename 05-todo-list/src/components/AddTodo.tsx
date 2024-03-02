import React from 'react'

interface Props {
  handleSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputValue: string
  setInputValue: (value: string) => void
}

export const AddTodo: React.FC<Props> = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <div>
      <form>
        <input
          onKeyDown={(e) => {
            handleSubmit(e)
          }}
          placeholder='¿Qué quieres hacer?'
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value) }}
          autoFocus
        />
      </form>
    </div>
  )
}
