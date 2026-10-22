

// import { useContext } from "react"


// import Createdata from "../context/Createdata"


// const Navbar = () => {

// const {datavalue,countchange}  =  useContext(Createdata)

//   return (
//   <>
  
//   <h2> {datavalue}</h2  >

//   <button onClick={countchange}> Click Navbar</button>

//   </>
//   )
// }

// export default Navbar


import { useContext } from "react"

import AuthContext from "../context/AuthContext"



const Navbar = () => {

const {changevalue,handlechange,datas,isActive} = useContext(AuthContext)

  return (
    <>

     <div   className={changevalue?"bg-amber-300 text-white p-2 h-50":"bg-black text-white p-2 h-50"}>

           <div>

              LOGO 

           </div>

     </div>

      {/* <h2>{changevalue}</h2>

      <p>{datas.course}</p> 

      <p>{datas.frontend}</p> 
  
      <p>{datas.backend}</p> 

      <p>{isActive?"It is True":"It is False"}</p> */}

      <button onClick={handlechange}>{changevalue?"Light":"Dark"}</button>

    
    </>
  )
}

export default Navbar