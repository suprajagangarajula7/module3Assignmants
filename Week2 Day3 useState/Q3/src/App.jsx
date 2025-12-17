import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageCard from './MessageCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <MessageCard title="Welcome" message="Welcome to React learning"/>
      <MessageCard title="Reminder" message="Practice React daily"/>
      <MessageCard title="Success" message="You are doing great!"/>
      <MessageCard title="Next Step" message="Learn useState next"/>
   </>
  )
}

export default App
