import { useState } from "react"

import Createdata from "../context/Createdata"

const Dataprovider = ({children}) => {

const [datavalue,setDatavalue] = useState(true)

const countchange = ()=>{

setDatavalue((prev)=>prev+1)

}

const isActive = true;

const datas =  { name:"React", subject:"node"}

  return (
  <>
  <Createdata.Provider value={{datavalue,countchange,isActive,datas}} >

      {children}

  </Createdata.Provider>
  
  </>
  )
}

export default Dataprovider
