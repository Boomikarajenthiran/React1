

import { useState } from "react"

const Array = () => {
 
  const [skills,setSkills] = useState(["HTML", "CSS", "JavaScript"])

  return (
    <div className="bg-amber-100 p-25 text-center ">
      
         {skills .map((skill,index)=>(
          <p className="bg-amber-500  text-white 
           mb-7 rounded-2xl p-4 " key={index}>{skill}</p>

         ))}

    </div>
  )
}

export default Array
