
import { useState} from "react"

const Toggle = () => {

 const [isOn,setIsOn] = useState(false);


  return (

    <div className="text-center bg-pink-200 font-bold h-140 p-20" >

      
        
        <button  className="bg-black text-white rounded-2xl p-2 text-center " onClick={()=>setIsOn((prev)=>!prev)} > 

           {isOn? "Hide BUTTON": "Show  BUTTON" } 
           
        </button>

            <h1>{
       
                 isOn?
      
                 "ON":
      
                 "OFF"
       
                }
            </h1>   

</div>

  )

}

export default Toggle