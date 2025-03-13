import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, seCounter] = useState(0)

  const addCounter = () =>{
    seCounter(counter + 1)
  }

  const removeCounter = () =>{
    seCounter(counter - 1)
  }

  return (
    <>
     <h1>Muhammad Rajeel Siddiqui</h1>
      <p>Click Button to Increase or Decrease Counter</p>
      <h4>Count: {counter}</h4>
      <button onClick={addCounter} style={{marginRight:'10px'}}>Counter +</button>
      <button onClick={removeCounter} style={{marginRight:'-10px'}}>Counter -</button>
    </>
  )
}

export default App
