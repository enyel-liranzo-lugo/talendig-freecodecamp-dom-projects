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
  return (
    <div>
      <h1>Todo List</h1>
      <main>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu tarea"
          />
          <button>Crear tarea</button>
        </div>

        <div>
          <h2>My tasks</h2>
          <div>
            {
              mockTodos.map(todo => {
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
