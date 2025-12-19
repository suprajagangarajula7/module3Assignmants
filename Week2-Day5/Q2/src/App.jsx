import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorToggle from './ColorToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ColorToggle/>
    </>
  )
}

export default App
