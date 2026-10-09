import { useState } from "react"

const Array = () => {

    const [course,setCourse] = useState(["HTML", "JAVA SCRIPT", "CSS"]);

    const addcourse = () =>{

       setCourse([...course,"REACT"])}

    const updatecss = () =>{

        const updatedcss = course .map((cour)=>cour==="CSS"? "ADVANCED CSS":cour)
         
        setCourse(updatedcss);
    }


  return (
    <div className=" bg-pink-200 h-140 text-center font-bold p-20 ">
      

         {course.map((courses,Index)=>(
 
         <p key={ Index}>{courses} </p>   

         ))}


        <button className="bg-yellow-400 rounded-2xl p-2" onClick={addcourse}> Add React</button>
    
         <button  className="bg-green-400 rounded-2xl p-2  " onClick={updatecss}> Update CSS  </button>
    </div>
  )
}

export default Array
