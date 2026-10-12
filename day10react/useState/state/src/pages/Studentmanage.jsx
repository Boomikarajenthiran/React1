
import { useState } from "react"

const Studentmanage = () => {

    const [students, setStudents] = useState([
     
  { id: 1, name: "Ravi", marks: 75, isPassed: true },
  
  { id: 2, name: "Priya", marks: 35, isPassed: false },
  
  { id: 3, name: "Kumar", marks: 90, isPassed: true }

]);

 const handleincrease = (id) =>{

  setStudents((prev)=>
    
    prev.map(student =>

    student.id===id?

    {...student,marks: student.marks+5}:

    student
))
}

const toggleresult =(id)=>{

setStudents((prev)=>
    prev.map((student)=>
        student.id===id?
        {...student,isPassed:!student.isPassed}:
        student
))

}

const deletstudent =(id)=>{
   setStudents(prev=>
    prev.filter(student=>
        student.id !==id
    )
    )
    
}



  return (
    <div className="bg-indigo-200 text-center font-bold p-30">

        {students.map((student)=>(

          <div  className="bg-white p-3"  key={student.id}>

          <h1>{student.name}</h1>

          <p>Marks:{student.marks}</p>

          <p>status: { student.isPassed? "pass":"fail"}</p>

           <button className="bg-red-400 rounded p-2" onClick={()=>handleincrease(student.id)}>INCREASE MARK</button>

           <button className="bg-lime-400 rounded p-2" onClick={()=>toggleresult(student.id)}>TOGGLE RESULT</button>

           <button className="bg-pink-400 rounded p-2" onClick={()=>deletstudent(student.id)}>DELETE STUDENT</button>
       
           <hr />


          </div>

        ))}



    </div>
  )
}

export default Studentmanage