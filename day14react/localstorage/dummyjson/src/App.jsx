
// import { useEffect, useState } from "react"

// import { useState } from "react"

// const App = () => {

// const [user,setUser] = useState([]);

// const userData = async()=>{

//   const newDatas = await fetch("https://dummyjson.com/users")

// //  console.log(userData)

// const change = await newDatas.json()

// // console.log(change.users)

//    setUser(change.users)

// }


//  useEffect(()=>{
  
//          userData()

//  },[]
// )

// // const handlechange =()=>{

// // const addUser = [...user, ]

// // setUser(addUser)

// // }






//   return(
//      <>

//     {/* <div>

//        <input type="text" placeholder="" onChange={handlechange} />

//     </div> */}

//     <div>

//          {
//              user.map((e)=>(

//                    <div key={e.id}>

//                          <p>{e.firstName}</p>
//                            <p>{e.age}</p>

//                    </div>
//              ))

//          }

//     </div>


    
//     </>
//   )
  
// }

// export default App
//========================================================================================================================
// import { useState } from "react"

// const App = () => {

// const[student,setStudent] = useState([ "boomika","lalli", "amutha"])

// const addStudent = ()=>{

// setStudent([...student,"Dharshana"])

// };

// const updateStudent = () => {

// setStudent(
  
//   student.map((studentupdate)=>

// studentupdate === "lalli" 
    
//     ? "Akila"

//     : studentupdate

// ))

// };

//   return (
//    <>
   
//    <div>
        
//         <h1>student details</h1>
        
//         {student.map((students,index)=>(
//           <p key={index}>{students}</p>
//         ))}

//         <button onClick={addStudent}>add student</button>
 
//         <button onClick={updateStudent}> update student</button>

//    </div>
   
//    </>
//   )
// }

// export default App

//==============================================================================================================================================

// import { useState } from "react"

// const App = () => {

// const [student,setStudent] =useState({name:"BOOMIKA", age: 20, city:"Trichy", course:"MERN"});

 
// const updateAge =()=>{

// setStudent({...student,age:21})

// }

// const updateproperty = () => {

//    setStudent({

//     ...student, id:101})

// }

//   return (
//     <>   
//    <div>
 
//         <h2>{student.name}</h2>

//         <p>AGE: {student.age}</p>

//         <p>CITY:  {student.city}</p>

//         <p>COURSE:  {student.course}</p>

//         <p>Id : {student.id}</p>

//          <button onClick={updateAge}>update single data</button>

//          <button onClick={updateproperty}> update property</button>

//    </div>
//    </>
//   )
// }

// export default App

//========================================================================================================================================================

// import { useState } from "react"

// const App = () => {

// const [obj,setObj] = useState ([
//   {id:101,name:"Boomika",course:"MERN"},
//   {id:102,name:"Amutha",course:"JAVA"},
//   {id:103,name:"Dharshana",course:"PYTHON"}

// ])

// const addObj =() =>{

// const newObj ={
//   id:104,name:"Akila",course:  "DOT NET"
// }

// setObj([

// ...obj,newObj

// ])

// }

// const specificobject = () =>{

//   setObj(
    
//     obj.map((newone)=>
  
//   newone.id === 102
//   ?{...newone,course:"JAVASCRIPT"}:

//   newone

//   ))
// }

//   return (
//   <>
//   <div>

  

//             {obj.map((student)=>(

//                <div key={student.id}>

//                <p>{student.name}</p>

//                {/* <p>------------------</p> */}

//                <p>COURSE:{student.course}</p>

//                <p>--------------------------</p>

//                </div>

    
//          ))}


//   </div>

//    <button onClick={addObj}>add object</button>

//     <button onClick={specificobject}>specific object</button>



//   </>
//   )
// }

// export default App

//============================================================================================================================================================

// import { useState } from "react"

// const App = () => {

// const [form, setForm] = useState("")

//  const [student,setStudent] = useState([])

// const handleChage =(e)=>{

//   setForm(e.target.value)

// }

// const handleAdd =()=>{

//   if(form.trim()===""){
//     alert("enter your name")
//     return;
//   }

//   setStudent((prev)=>[...prev,form])

// setForm("")

// }


//   return (
//    <>
   
//    <div>

//        <h2>STUDENTS FORM</h2>

//       <input type="text" placeholder="Enter your name"

//          value={form} onChange={handleChage} />

//      <button onClick={handleAdd}>ADD FORM</button>

//       <h3>students</h3>

//       {student.map((students,index)=>(

//         <p key={index}>{students}</p>

//       ))}

//    </div>
   
//    </>
//   )
// }

// export default App
//=======================================================================================================================================

// import { useState } from "react"

// const App = () => {

// const [data,setData] = useState("")

// const [upData, setUpData] = useState([])

// //--------------------------------

// const handlechange = (e)=>{

// setData(e.target.value);

// }

// //----------------------------------

// const addingData =() =>{

// if(data.trim() === ""){
//   alert("Please enter datas")
//   return;
// }


// setUpData((prev)=>[...prev,data]);

// setData("");

// }

// //-------------------------------------


//   return (
//     <>
   
//        <div>

//           <h2> DATAS</h2>

//            <input type="text" value={data} placeholder=" ENTER THE DATA" onChange={handlechange} />

//            <button onClick={addingData}> ADD DATA</button>

//            <h3>Data Adding</h3>

//            {upData.map((newdata,index)=>(

//             <p key={index}>{newdata}</p>

//            ))}

//        </div>

//     </>
//   )
// }

// export default App

//=====================================================================================================================================================================

// import { useState } from "react"

// const App = () => {

// const [form,setForm]=useState({

//           name:"",
//           email:"",
//           age:"",
//           course:""

// })

// const [students, setStudents] = useState([]);

// const [editId, setEditId] = useState(null);


// const handlechange = (e) =>{

// const {name,value} = e.target

// setForm({...form,[name]:value})

// }

// const handlesubmit = (e) =>{

// e.preventDefault();

// if(

// !form.name.trim() ||
// !form.email.trim() ||
// !form.age.trim() ||
// !form.course.trim() 
// ){
//   alert("All fields are required")
//   return;
// }

// if(editId !== null){

// const updateStudent = students.map((student)=>

// student.id === editId?
// {...student,...form}:
// student
// )
// setStudents(updateStudent)
// setEditId(null)
// }
// else{
//   const newStudent = {
//     id:crypto.randomUUID(),...form}

//    setStudents([...students,newStudent])
// }

// setForm({

// name: "",
// email:"",
// age:"",
// course:""

// })
// }

// const handleEdit =(student)=>{

// setForm({

//   name:student.name,
//   age:student.age,
//   email:student.email,
//   course:student.course

// })

// setEditId(student.id)
// }

// const handleDelete =(id)=>{

// const updatestudent = students.filter((newstudent)=>

//   newstudent.id !==id

// )

// setStudents(updatestudent)

// if(editId === id){

//   setEditId(null);
//   setForm({

//   name:"",
//   email:"",
//   age:"",
//   course:""

//   })
// }

// }

//   return (
//   <>
//   <div>
// <form onSubmit={handlesubmit}>

//          <h2>STUDENT DETAILS</h2>

//          <input type="text"   name="name" value={form.name}       placeholder="Enter the Name"   onChange={handlechange} /> <br />
//          <input type="email"  name="email" value={form.email}     placeholder="Enter the Email"  onChange={handlechange} /> <br />
//          <input type="number" name="age" value={form.age}         placeholder="Enter the Age"    onChange={handlechange} />  <br />
//          <input type="text"   name="course" value={form.course}   placeholder="Enter the Course" onChange={handlechange} />   <br />

//          <button type="submit">{editId !==null?"Update":"Add"}</button>
 
// </form>


// <h3>Student List</h3>

// <table>

//        <thead>

//             <tr>
//                 <th>name</th> 
//                 <th>email</th>
//                 <th>age</th>
//                 <th>course</th>

//             </tr>

//        </thead>
//        <tbody>

//            {students.map((student)=>(
             
//              <tr key={student.id}>
              
              
//                <td>{student.name}</td> 
//                <td>{student.email}</td>
//                <td>{student.age}</td>  
//                <td>{student.course}</td>

//                <td>

//                <button type="button" onClick={()=>handleEdit(student.id)}>EDIT</button>

//               <button type="button" onClick={()=>handleDelete(student.id)}>DELETE</button>

//                </td>

//                </tr>

//            ))}

//        </tbody>
//      </table>

//   </div>
//   </>
//   )
// }
// export default App;

//========================================================================================================================================================================


import { useState } from "react"

const App = () => {

const [data,setData] = useState({firstname:"",age:""});

const [store,setStore] = useState([])

const [editId,setEditId] = useState(null)



const handleChange = (e) =>

setData({...data,[e.target.name]: e.target.value})



const handleClick =(e)=>{

e.preventDefault()

const getData =[...store,data]

setStore(getData)

setData({firstname:"",age:""})

}


const handeleEdit = (data,id) =>{

setData(data)

setEditId(id)

}


const handleUpdate = (e) =>{

e.preventDefault()

const takeSingleData =  store.map((e,i)=>i==editId?{...e,...data}:e)

setStore(takeSingleData)

setEditId(null)

setData({firstname:"",age:""})

}

const handeleDelete = (id) =>{

const deletedata = store.filter((i)=>i!==id)

setStore(deletedata)

}

  return (
   <>
   
   <div>
 
      <form>
         <input type="text" name="firstname" placeholder="Enter the Name" onChange={handleChange} value={data.firstname}/> <br />

          <input type="number" name="age" placeholder="Enter the age" onChange={handleChange} value={data.age} /><br />

           {editId==null? <button onClick={handleClick}>add</button>  :  <button onClick={ handleUpdate}>Update</button>}


      </form>

      {store.map((e,i)=>(

         <div key={i}>

          <h1>{e.firstname}</h1>

          <p>{e.age}</p>

         <button onClick={()=>handeleEdit(e,i)}>Edit</button>

         <button onClick={()=>handeleDelete(e,i)}>Delete</button>

         </div>

      ))}

   </div>

   </>
  )
}

export default App

//========================================================================================================

// import { useState } from "react"


// const App = () => {

//   const [formdata,setFormData] = useState({firstname:"",age:""})
//   const [store,setStore] = useState([])
//   const [eid,setEid] = useState(null)

//   const handleChange = (e)=>{

//     setFormData({...formdata,[e.target.name]:e.target.value})

//   }

 
//   const handleClick = (e)=>{

//     e.preventDefault()

//     const getData = [...store]

//     getData.push(formdata)

//     setStore(getData)

//     // setStore((p)=>[...p,formdata])

//     setFormData({firstname:"",age:""})

//   }

//   const handleEdit = (data,id)=>{

//     setFormData(data)
//     setEid(id)

//   }

//   const handleUpdate = (e)=>{
    
//     e.preventDefault()
//     const takeSingleData = store.map((e,i)=>i==eid?{...e,...formdata}:e)

//     setStore(takeSingleData)
//     setEid(null)
//     setFormData({firstname:"",age:""})


//   }


//   const handleDelete = (e,id)=>{

//     const deleteData = store.filter((e,i)=>i!=id)

//     setStore(deleteData)



//   }


//   return (
//     <>
//     <form>
//       <input type="text" name="firstname" onChange={handleChange} value={formdata.firstname} />
//       <input type="text" name="age" onChange={handleChange} value={formdata.age} />
//       {eid==null?<button onClick={handleClick}>Add</button>:<button onClick={handleUpdate}>Update</button>}
      
      
//     </form>

//     <div>
//       {store.map((e,i)=>(
//         <div key={i+1}>
//           <h1>{e.firstname}</h1>
//           <p>{e.age}</p>
//           <button onClick={()=>handleEdit(e,i)}>Edit</button>
//           <button onClick={()=>handleDelete(e,i)}>Delete</button>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App