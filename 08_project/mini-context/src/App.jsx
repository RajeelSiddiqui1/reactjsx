import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profiles from './components/Profiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Rajeel Siddiqui</h1>
     <Login/>
     <Profiles/>
    </UserContextProvider>

  )
}

export default App
