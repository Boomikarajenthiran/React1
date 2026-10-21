

import { useState } from "react"

import { useNavigate } from "react-router-dom"



const Register = () => {

  const navigate = useNavigate()

  const [registerdata,setRegisterData] = useState({username:"",useremail:"", userpassword:""})



const handlechange = (e) => {

setRegisterData({...registerdata,[e.target.name]:e.target.value})

}

const handlesubmit = (e) =>{

  e.preventDefault()

const getdatas = JSON.parse(localStorage.getItem("registerdatas")) || []

const obj = {id:Date.now(),name:registerdata.username,email:registerdata.useremail,
  
  password:registerdata.userpassword}

getdatas.push(obj)

const convert = JSON.stringify(getdatas)

localStorage.setItem("registerdatas",convert)

alert("sussecfully register")

setRegisterData({username:"",useremail:"", userpassword:""})

setTimeout(()=>{

    navigate("/login")

},2000)

}




  return (
  <>
  <form onSubmit={handlesubmit} className="p-30 flex flex-col gap-10  items-center w-350 m-20">

    <input className="border w-100 p-1 h-10 rounded" type="text" placeholder=" Enter the name" onChange={handlechange} value={registerdata.username} name="username"  />
    <input className="border w-100 p-1 h-10 rounded" type="email" placeholder=" Enter the email" onChange={handlechange} value={registerdata.useremail} name="useremail"  />
    <input className="border w-100 p-1 h-10 rounded" type="password" placeholder=" Enter the password " onChange={handlechange} value={registerdata.userpassword} name="userpassword"  />

    <input className=" bg-black text-white border w-70 p-1 h-10 rounded" type="submit" value="Register" />

  </form>
  </>
  )
}

export default Register