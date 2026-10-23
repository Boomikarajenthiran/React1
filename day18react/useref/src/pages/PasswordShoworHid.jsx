import { useRef } from "react"

const App = () => {

const background  = useRef(null)

const handleon = () =>{

// background.current.style.backgroundColor = "yellow";
background.current.innerHTML = "BOOMI4321 "

}

const handleoff = ()=>{

// background.current.style.backgroundColor = "red";
background.current.innerHTML = "----------"

}

  return (
   <>
       

   <div  className=" bg-lime-200 h-150 text-center p-20 font-bold ">

        <h1 className="p-10 text-2xl " ref={background} >PASSWORD </h1>

       <button className="bg-lime-600 p-2 rounded w-20 " onClick={handleon}>show</button>

       <button className="bg-red-600 p-2 rounded w-20" onClick={handleoff}>OFF</button>

   </div>
   
   </>
  )
}

export default App