import React, { useState } from 'react'
import { type TodoTitle } from './types/types'

const mockTodos = [
  {
    id: '1',
    title: 'Doing something',
    completed: false
  },
  {
    id: '2',
    title: 'Learning TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learning React',
    completed: false
  },
  {
    id: '4',
    title: 'Doing some stuffs',
    completed: false
  },
  {
    id: '5',
    title: 'Complete the Bootcamp',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [inputValue, setInputValue] = useState('')

  // Add TODO

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    handleAddTodo({ title: inputValue, completed: false })
    setInputValue('')
  }

  // Delete TODO

  return (
    <div>
      <h1>Todo List</h1>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className='new-todo'
              placeholder='¿Qué quieres hacer?'
              value={inputValue}
              onChange={(e) => { setInputValue(e.target.value) }}
              autoFocus
            />
            <button>
              Add Task
            </button>
          </form>
        </div>

        <div>
          <h2>My tasks</h2>
          <div>
            {
              todos.map(todo => {
                return (
                  <div key={todo.id}>
                    <input
                      type="checkbox"
                      value={todo.title}
                    />
                    <label htmlFor={todo.id}>
                      {todo.title}
                    </label>
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
