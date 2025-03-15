import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmitButton = (e) => {
      e.preventDefault()
      setUser({username,password})
    }

  return (
    <>
     <h2>Login</h2>
     <input 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      placeholder='username' />
     {" "}
     <input
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       type="password"
       placeholder='password' />
      {" "}
     <button type='submit' onClick={handleSubmitButton}>Submit</button>
    </>
  )
}

export default Login;