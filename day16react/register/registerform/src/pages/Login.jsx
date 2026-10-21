

import { useState } from "react"

import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const [logindata,setLoginData] = useState({useremail:"",userpassword:"" })

  const handlechange  = (e) => {

     setLoginData({...logindata,[e.target.name]:e.target.value})

  }

  const handlesubmit = (e) =>{

  e.preventDefault()

  const getdata = JSON.parse(localStorage.getItem("registerdatas"))

  // console.log(getdata);

   const finduser = getdata . find((e)=>e.email === logindata.useremail && e.password === logindata.userpassword )

   console.log(finduser);

   if(!finduser){

      alert("Your Not a Valid User")

   }

  localStorage.setItem("isActive", JSON.stringify(finduser))

   navigate("/home");

   setLoginData({useremail:"",userpassword:"" })

  }

  return (
  <>
  <form onSubmit={handlesubmit} className="p-10 flex flex-col gap-10 w-300 justify-center items-center">

    <input className="border w-100 p-1 h-10 rounded" type="email"    placeholder=" Enter the email"     onChange={handlechange} value={logindata.useremail} name="useremail"  />
    <input className="border w-100 p-1 h-10 rounded" type="password" placeholder=" Enter the password " onChange={handlechange} value={logindata.userpassword} name="userpassword"  />

    <input className=" bg-red-600 text-white border w-70 p-1 h-10 rounded" type="submit" value="Login" />

  </form>
  </>
  )
}

export default Login