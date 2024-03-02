import React, { useState } from 'react'
import { type Todo as TodoType, type TodoId, type TodoTitle } from './types/types'
import { AddTodo } from './components/AddTodo'
import { mockTodos } from './types/sampleconsts'
import { Todos } from './components/Todos'

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
      const newTodo = { title: inputValue, completed: false }
      handleAddTodo(newTodo)
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

  return (
    <div
      className='bg-white p-10 text-slate-950 w-[450px] h-[400px] overflow-hidden rounded-md'
    >
      <h1 className='text-center text-2xl font-bold border-2 border-black rounded-lg w-fit px-2 mx-auto mb-5'>Todo List</h1>
      <main>
        <AddTodo
          setInputValue={setInputValue}
          inputValue={inputValue}
          handleSubmit={handleSubmit}
        />
        <Todos
          todos={todos}
          handleCompletedTodo={handleCompletedTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      </main>
    </div>
  )
}

export default App
