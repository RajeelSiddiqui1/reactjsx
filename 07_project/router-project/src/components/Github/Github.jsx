import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then((res)=> res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])

    if (!data) {
        return <div className="text-white text-3xl bg-gray-600 p-4">Loading...</div>;
    }

  return (
    <>
    <div className='text-white text-center text-3xl bg-gray-600 p-4'>
        bio: {data.bio}
        <img src={data.avatar_url} alt="Github picture" width={300}/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/RajeelSiddiqui1`)
     if (!response.ok){
       console.log('error')
     }
     return response.json()
}