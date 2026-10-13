import { useState } from "react"

const Courselist = () => {

const[course, setCourse] = useState("");

const [stucourse,setStucourse] = useState([]);

const handleadd = () =>{

if(course.trim() === ""){

  alert("pleace enter your course")

  return;
  }


setStucourse((prev)=>[...prev,course.trim()]);

setCourse("");

}

  return (
    <div className="text-center p-53 bg-fuchsia-400 ">

    <input className="bg-taupe-50 p-2 " type="text" placeholder=" Enter your course" value={course} onChange={(e)=>(setCourse(e.target.value))}/>

    <button className="bg-amber-400 p-2 rounded-2xl " onClick={handleadd}>ADD COURSES</button>

    <h1 className="font-bold p-10 ">Courses:</h1>

    {stucourse.map((studentcourse,index)=>(

      <p key={index}> {studentcourse}</p>
     
     ))}

    </div>
  )
}

export default Courselist