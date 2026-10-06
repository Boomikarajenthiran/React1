
import { useState } from "react"


const Toggle = () => {

  const [showdetails,setShowdetails] = useState(false);

  return (
    <div className="bg-lime-300 p-25 text-center">

      
 <button className="bg-pink-200 rounded p-2" onClick={()=>

        setShowdetails((prev)=> !prev)}>

        { showdetails ? "hide details": "show details"}

      </button>

      {

    showdetails? <h2 className="bg-blue-300 p-2 rounded">Student Details</h2>:

     <p className="bg-red-400 p-2 rounded">.....EMPTY.....</p>}
      
    </div>
  )
}

export default Toggle
