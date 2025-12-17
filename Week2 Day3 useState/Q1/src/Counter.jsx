import React from 'react'
import { useState } from 'react'

function Counter() {
     const [count, setCount] = useState(0)
  const incrementFun=()=>{
    setCount(count+1)
  }
  return (
    <div>
     <h3>count= {count}</h3>
     <button onClick={incrementFun}>Increment</button>
    </div>
  )
}

export default Counter