import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
  
  

  /*useEffect(() => {
    
    const getBackend = async () => {
      await fetch("http://localhost:5000/hello", {
        method: "GET",
        credentials: "include"
      }).then(res => res.json()).then(data => console.log(data))
    }


    getBackend()
*/

const handleRedirect = () => {
  navigate("/auth");
}
return (
  <div className='bg-sky-400 w-screen h-screen flex flex-col items-center flex justify-center'>
    <p className='text-2xl text-black bg-yellow-300 rounded-md p-1'>Welcome to your Dashboard!</p>
<button
onClick={handleRedirect}
className="bg-red-500 text-white px-4 py-2 rounded-md w-fit h-fit m-3"
>
Logout
</button>
</div>
)
}

