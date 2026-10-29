
import React,{lazy , Suspense, useReducer, useState } from "react"
// import LazyloadAbout from "./componant/LazyloadAbout";
import Home from "./componant/Home";

import Homes from "./componant/Homes";



// import { Link,Routes,Route } from "react-router-dom";

// import Project from "./componant/Project";

// import Assignment from "./componant/assignment";

// import Help from "./componant/Help";

const LazyloadAbout =lazy(()=> import("./componant/LazyloadAbout"))

const StudentLazyload = lazy(()=> import ("./componant/StudentLazyload"))
    
// const Project =lazy(()=> import("./componant/Project"))

// const Assignment =lazy(()=> import("./componant/assignment"))

// const  Help =lazy(()=>import("./componant/Help"))

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let init =0

const reducer = (counter,action) =>{

switch(action.type){

   case "INC" :

        return counter+1

   case "DNC" :

         return counter-1

   case "RESET" :

         return init

}

}



const App = () => {
    
    
    const [datas,setDatas] = useState(false);


    const [student,setStudent] = useState(false);

    
    const [count,dispatch] = useReducer(reducer,init)




  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (

   <>
    <div className=" bg-blue-200 h-100 text-center p-30 font-semibold">


    {!datas && <Home />}

    <button className="bg-white w-40 rounded " onClick={()=>setDatas(true)} >Click to change</button>

     {datas && (<Suspense fallback={<h3>Loading...</h3>}>
           
               <LazyloadAbout/>
   
           </Suspense>)}
    </div>

   {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
   
   
   <div className=" bg-amber-200 h-100 text-center p-30 font-semibold">


    {!student && <Homes />}

    <button className="bg-white w-40 rounded " onClick={()=>setStudent(true)} >Click to change</button>

     {student && (<Suspense fallback={<h3>Show Loading Student Details... </h3>}>
           
          <StudentLazyload/>
   
           </Suspense>)}
    </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
   

    <div className="bg-fuchsia-400 h-100 text-center p-30 font-extrabold">

        <h1 className="text-3xl ">{count}</h1>

        <button className="bg-teal-400 w-25 rounded" onClick={()=>dispatch({type:"INC"})}>Increment</button>

        <button className="bg-red-500 w-25 rounded" onClick={()=> dispatch({type:"DNC"})}>Decrement</button>

        <button className="bg-amber-400 w-25 rounded" onClick={()=>dispatch({type:"RESET"})}>Reset</button>

    </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
   


     {/* <nav className="text-center bg-black p-5 font-serif flex justify-between text-white">

        <Link to={"/"}>Project</Link>
         <Link to={"/assignment"}>Assignment</Link>
          <Link to={"/help"}>Help</Link>

     </nav>

<Suspense fallback={<h3>Loading...</h3>}>

     <Routes >

        <Route path="/"  element={<Project/>}/>

        <Route path="/assignment"  element={<Assignment/>}/>

        <Route path="/help"  element={<Help/>}/>

     </Routes>

</Suspense> */}

   </>
  )
}

export default App