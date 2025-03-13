import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-3xl'>Tailwind Test</h1>
    <Card name="Rajeel"/>
    <Card name="Ahmed"/>
    
    </>
  )
}

export default App
