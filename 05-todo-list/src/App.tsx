import React, { useState } from 'react'
import { type Todo as TodoType, type TodoId, type TodoTitle } from './types/types'
import { Todo } from './components/Todo'

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

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleAddTodo({ title: inputValue, completed: false })
      setInputValue('')
    }
  }

  // Delete TODO

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  // Completed TODO

  const handleCompletedTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const entries = Object.entries(localStorage)
  console.log(entries)

  return (
    <div>
      <h1>Todo List</h1>
      <main>
        <div>
          <form>
            <input
              onKeyDown={handleSubmit}
              placeholder='¿Qué quieres hacer?'
              value={inputValue}
              onChange={(e) => { setInputValue(e.target.value) }}
              autoFocus
            />
          </form>
        </div>

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
      </main>
    </div>
  )
}

export default App
