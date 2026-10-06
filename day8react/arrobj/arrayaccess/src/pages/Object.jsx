
import { useState } from "react"

const Object = () => {

  const [student,setStudent] = useState({
    name: "Boomika",
    age : 20,
    course: "React"

  });

  const updateCourse = ()=>{
    setStudent ({...student,
      course: "MERN"
    })
  }

  const addCity = () =>{
 
    setStudent ({...student,
      city: "chennai"
    });

  }

  return (
  <div className="bg-green-300 p-25 text-center 
         ">
      <div className="bg-amber-200 rounded-2xl p-5 " >
         <h1>{student.name}</h1>
         <h3>{student.age}</h3>
         <h3>{student.course}</h3>
         <h3>{student.city}</h3>

         
         <button className="bg-red-700 rounded
          p-2  " onClick={updateCourse} > update</button>   

          <button className="bg-green-700 rounded p-2  " onClick={addCity} > add city </button>
        
       </div> 
    </div>
  )
}

export default Object
