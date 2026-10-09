
import { useState } from "react"

const Booleanstate = () => {

 const [password,setPassword] = useState(false );


  return (
    <div className="bg-lime-200  h-137 text-center p-20">

        <h1 className="border-4 h-30 text-center p-10 bg-amber-50">

             {
             password?<h1>"react123"</h1>: <h1> ******** </h1>
             }

        </h1>

             <button className="bg-red-600 rounded-2xl p-2 " onClick={()=>setPassword ((prev)=>!prev)}>
            {password ?"hide password" : "show  password"}
             </button>
    </div>
  )

}

export default Booleanstate
