

import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

const Home = () => {

const[userdatas,setUserDatas] = useState({})

const navigate = useNavigate()   

const getDatas = () => {

const get = JSON.parse(localStorage.getItem("isActive"))

if(!get)
{

alert("your not valid user please login")

navigate("/")

}

setUserDatas(get)

}

useEffect(()=>{

getDatas()

},[])



  return (
    <>

    <div className="bg-green-400 p-50 h-160 font-bold text-3xl text-center    ">
      
      
        <h4>{userdatas.name}</h4>

        <p>{userdatas.email}</p>

        <p>{userdatas.id}</p> 

    </div>
    
    

    </>
  )
}

export default Home


// CRUD -Array -LocalStorage
// Login & Register with active user Home
// Fetch API - UseEffect - Search - Filter - Sort
// React- Router-DOM
// Tailwindcss Designs
// Implimantation of AI
// Object and array Manipulation filter.    
