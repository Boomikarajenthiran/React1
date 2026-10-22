

import { useState } from "react";

import AuthContext from "../context/AuthContext"


const AuthProvider = ({children}) => {

 const [changevalue, setChangevalue] = useState(true);   

const handlechange = () => {

   setChangevalue(!changevalue)   

 }

const datas = {course:"MERN", frontend:"javascript", backend:"node"};

const isActive = true;  


  return (
     <>
     
     <AuthContext.Provider value={{changevalue,handlechange,datas,isActive}}>
     
            {children}
     
     </AuthContext.Provider>
     
     </>
  )
}

export default AuthProvider