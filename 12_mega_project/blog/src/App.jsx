import { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from "./stores/authSlice"
import authService from "./appwrite/auth"

import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>hihi
  <div className='w-full block'>
    <Header/>
    {/* <Outlet/> */}
    <Footer/>
  </div>
  </div>
 ) : null
}

export default App
