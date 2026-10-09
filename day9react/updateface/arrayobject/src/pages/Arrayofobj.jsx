import { useState } from "react"

const App = () => {

  const [employees , setEmployees ] = useState([

  {id: 101, name:"BOOMIKA", salary:25000  },
  {id: 102, name:"DHARSHANA", salary:30000  },
  {id: 103, name:"AMUTHA", salary:28000  }
  ])
   // adding new object
  const addnewemployees  =()=>{ 
    
    const addnew = {

    id: 101,
    name:"GOPIKA",
    salary: 32000

   }

  setEmployees([...employees , addnew])

  };
const updatesalary = () =>{
  const updateemployeesalary= employees.map((employ)=> employ.id === 102 ? {...employ, salary: 35000}: employ );

  setEmployees(updateemployeesalary);
  
  }

   return (


    <div className="text-center bg-pink-200 font-bold h-255 p-20" >
      
         {employees.map((emp)=>(

          <div key={emp.id}>
            <h1>{emp.id}</h1> 
            <p>{emp.name}</p>
            <p>{emp.salary}</p>

          </div>

          
         ))}
      
      
      {/* adding new object button */}
 

         <button className="bg-green-400 text-black p-2 rounded-2xl" onClick={addnewemployees}> Add Employee </button> 

         <button  className="bg-red-600 text-black p-2 rounded-2xl" onClick={updatesalary}>Update Salary</button>
    </div>
  )
}
export default App
