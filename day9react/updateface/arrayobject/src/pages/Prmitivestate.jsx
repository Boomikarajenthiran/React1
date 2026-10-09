import { useState } from "react"

const Prmitivestate = () => {

    const [ Employee,setEmployee] = useState({name:"Arun", salary: 25000});

    const increasesalary = () =>(
        
        setEmployee({...Employee, salary : Employee.salary + 5000})
    )
  return (
    <>
    <div className="bg-amber-200 h-157 text-center font-bold p-20">
 
          <h1>{Employee.name}</h1>
          <p>{Employee.salary}</p>

      
      <button  className=" bg-blue-600 rounded-2xl p-2" onClick={increasesalary}>Increase Salary</button>
    </div>
    </>
  )
}

export default Prmitivestate
