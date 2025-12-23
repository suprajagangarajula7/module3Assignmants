import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoProvider>
      <AddTodo/>
      <TodoList/>
    </TodoProvider>
    </>
  )
}

export default App
