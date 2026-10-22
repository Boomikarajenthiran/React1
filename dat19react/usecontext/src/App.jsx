// import { useContext } from "react"

// import Createdata from "./context/Createdata"

// import Navbar from "./component/Navbar"

// const App = () => {

// const {datavalue,countchange,isActive,datas} = useContext(Createdata)


//   return (
//     <>
    
//          <h2>{datavalue}</h2>

//          <button onClick={countchange}>click</button>
    
//          <h2>{isActive? "This is true" :"This is false"}</h2>
    
//          <h3>{datas.name}</h3>

//          <h3>{datas.subject}</h3>

//          <Navbar/>
    
//      </>
//   )
// }

// export default App

import { useContext } from "react"
import AuthContext from "./context/AuthContext"
import Navbar from "./component/Navbar"

const App = () => {

const {changevalue,handlechange,datas,isActive} = useContext(AuthContext)

  return (
  <>

      <div   className={changevalue?"bg-amber-300 text-white p-2 h-50":"bg-black text-white p-2 h-50"}>

           <div>

              LOGO 

           </div>

     </div>



     {/* <h1>{changevalue}</h1> */}

     <button onClick={handlechange}>{changevalue?"Dark":"Light"}</button>
       
      {/* <p>{datas.course}</p> 

      <p>{datas.frontend}</p> 
  
      <p>{datas.backend}</p> 

      <p>{isActive?"It is True":"It is False"}</p> */}

      <Navbar/>
  
  </>
  )
}

export default App