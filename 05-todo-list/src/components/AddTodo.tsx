import React from 'react'

interface Props {
  handleSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputValue: string
  setInputValue: (value: string) => void
}

export const AddTodo: React.FC<Props> = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <div className='text-center text-white'>
      <form>
        <input
          className='px-1.5 py-1 rounded-md text-sm'
          onKeyDown={(e) => {
            handleSubmit(e)
          }}
          placeholder='What do you want to do?'
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value) }}
          autoFocus
        />
      </form>
    </div>
  )
}
