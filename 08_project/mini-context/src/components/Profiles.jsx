import React, {useContext} from 'react'
import userContext from '../Context/UserContext'

function Profiles() {
    const {user} = useContext(userContext)
    
    if (!user) return <div>Please Login!</div>

    if (!user.username || !user.password) return <div>Please provide values!</div>

    return <div>Welcome: {user.username} and your password is: {user.password}</div>
}

export default Profiles;