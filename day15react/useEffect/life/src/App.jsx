import { useEffect, useState } from "react"

const App = () => {
  
  const [timemanage,setTimemanage] = useState(0)

  const [running,setRunning] = useState(false);

   useEffect(()=>{

     let timer;
     
     
     if(running){
      
     timer = setInterval(() => {

      setTimemanage((p)=>p+1);
      
     }, 1000);

     }

     return ()=>

    clearInterval(timer)

     
   },[running])

const handleStart=()=>{

  setRunning(true)
}

const handleStop=()=>{

setRunning(false)

}

const handleReset=()=>{

setRunning(false);

setTimemanage(0)

}
   
  return (
        <>
           <div className="bg-amber-300 text-center h-160 p-40 mb-4">

                <h1 className="font-bold text-3xl">TIMER</h1>  

                <p className="text-2xl font-black text-white mb-4">{timemanage}:seconds</p>

                 {/* <button onClick={handleclick}>click timer</button>           */}
                 
                 <button className="bg-amber-950 text-white rounded p-1 px-3 py-2" onClick={handleStart}>start</button>

                 <button className="bg-lime-500 text-white rounded p-1 px-3 py-2" onClick={handleStop}>stop</button>

                 <button className="bg-blue-400 text-white rounded p-1 px-3 py-2" onClick={handleReset}>reset</button>

            </div>
        </>
   )
 }
 export default App

//========================================================================================================================================================================================================================
// import { useState } from "react"


// const App = () => {

// const [student, setStudent] = useState("")


//   return (
//     <>
    
//     <div>

//          <h2>Student Management</h2>

//          <input type="text" value={student} placeholder="Enter the Name" onChange={handlechange} />

//          <input type="text"  value={student} placeholder="Enter the Course" onChange={handlechange} />

//          <button onClick={handleClick}>Add Student</button>

//     </div>
    
//     </>
//   )
// }

// export default App


// import { useEffect, useState } from "react"

// const App = () => {

//   const [count,setCount] = useState(0)

//   useEffect(()=>{
  
//   console.log("Effect executed")
   
//   })
  
//   return (
//    <>
   
//    <div>

//       <h2>{count}</h2>

//       <button onClick={()=>setCount(count+1)}>increment</button>

//    </div>

//    </>
//   )
// }

// export default App


// import { useState } from "react"

// const App = () => {

// const[count ,setCount] = useState(0)

//   return (
//     <>
    
//     <div>

//          <h1>{count}</h1>

//          <button onClick={()=>setCount(count-1)}>decrement</button>

//     </div>

//     </>
//   )
// }

// export default App

//=========================================================================================================

// import { useEffect, useState } from "react"

// const App = () => {

//   const [increment,setIncrement] = useState(0)

//   useEffect(()=>{

//      console.log("useEffect Executed")

//   },[])


//   return (
    
// <>

// <div>

//      <h1>{increment}</h1>

//      <button onClick={()=>setIncrement(increment - 10)}>increment</button>

// </div>

// </>

//   )
// }

// export default App

//========================================================================================================================

// import { useEffect, useState } from "react"

// const App = () => {
  
//   const [timemanage,setTimemanage] = useState(0)

//   const [running,setRunning] = useState(false);

//    useEffect(()=>{

//      let timer;
     
     
//      if(running){
      
//      timer = setInterval(() => {

//       setTimemanage((p)=>p+1);
      
//      }, 1000);

//      }

//      return ()=>

//     clearInterval(timer)

     
//    },[running])

// const handleStart=()=>{

//   setRunning(true)
// }

// const handleStop=()=>{

// setRunning(false)

// }

// const handleReset=()=>{

// setRunning(false);

// setTimemanage(0)

// }
   
//   return (
//         <>
//            <div className="bg-amber-300 text-center h-160 p-40 mb-4">

//                 <h1 className="font-bold text-3xl">TIMER</h1>  

//                 <p className="text-2xl font-black text-white mb-4">{timemanage}:seconds</p>

//                  {/* <button onClick={handleclick}>click timer</button>           */}
                 
//                  <button className="bg-amber-950 text-white rounded p-1 px-3 py-2" onClick={handleStart}>start</button>

//                  <button className="bg-lime-500 text-white rounded p-1 px-3 py-2" onClick={handleStop}>stop</button>

//                  <button className="bg-blue-400 text-white rounded p-1 px-3 py-2" onClick={handleReset}>reset</button>

//             </div>
//         </>
//    )
//  }
//  export default App

//===============================================================================================================================

//WITHOUT EMPTY DEPENDENCY ARRAY

// import { useEffect, useState } from "react"

// const App = () => {

//   const[number,setNumber] = useState(0)

//   useEffect(()=>{

//    console.log("useEffect rendered")

//   })

//   return (
//     <>
    
//     <div>

//        <h2>{number}</h2>

//        <button onClick={()=>setNumber(number+1)}>number increase</button>

//     </div>

//     </>
//   )
// }

// export default App
//=============================================================================================================================

//WITH EMPTY DEPENDENCY ARRAY

// import { useEffect, useState } from "react"

// const App = () => {

//   const[count,setCount] = useState(0)

//   useEffect(()=>{

//     console.log("component mounted")

//   },[])

//   return (
//    <>
   
//    <div>

//       <h1>{count}</h1>

//       <button onClick={()=>setCount(count+1)}>increase</button>

//    </div>

//    </>
//   )
// }

// export default App

//============================================================================================================================================

//USEEFFECT WITH DEPENDENCY ARRAY

// import { useEffect, useState } from "react"

// const App = () => {

// const [state,setState] = useState(0)

// useEffect(()=>{

// document.title = `state:,${state}`;

// },[state])

//   return (
//    <>
   
//         <div>
          
//           <h1>{state}</h1>

//           <button onClick={()=>setState(state+10)}>increase</button>
            
        
//         </div>   

//    </>
//   )
// }

// export default App

//========================================================================================================================================================================================

// import { useEffect, useState } from "react"

// const App = () => {

// const [state,setState] = useState(0)

// useEffect(()=>{

// document.title = `state:, ${state}`;
// },[state])

//   return (
//    <>
   
//    <div>

//         <h1>{state}</h1>

//        <button onClick={()=>setState(state+10)}>state increase</button>      

//    </div>

//    </>
//   )
// }

// export default App

//=========================================================================================================================================================================================================

// import { useEffect, useState } from "react"

// const App = () => {

// const [name,setName] = useState("")



// const[student,setStudent] = useState(()=>{

// const getdata = localStorage.getItem("student");

// return getdata ? JSON.parse(getdata) : [];

// })

// useEffect(()=>{

// localStorage.setItem(

// "student",JSON.stringify(student) 

// )

// },[student])


// const handlechange = ((e)=>{

// setName(e.target.value)

// })

// const handleAdd =(()=>{

// if(!name.trim()) return;  

// const newStudent ={
// id:Date.now(),
// name: name
// };

// setStudent((prev)=>[...prev,newStudent])
// setName("")

// })

// const handleDelete =(id)=>{

//   setStudent((prev)=>prev.filter((student)=>student.id !==id));

// }


//   return (
//     <>
//     <div>

//         <input type="text" value={name} placeholder="Enter student name"  onChange={handlechange} />

//         <button onClick={handleAdd}> Add student </button>

//         {student.map((student)=>(

//          <div key={student.id}>

//           <h1>{student.name}</h1>

//           <button onClick={()=>handleDelete(student.id)}>delete</button>

//          </div>


//         ))}


//     </div>
//     </>
//   )
// }

// export default App

//==============================================================================================================

// import { useEffect, useState } from "react"

// const App = () => {

// const [name,setName] = useState("")

// const [student,setStudent] = useState(()=>{

// const getdata = localStorage.getItem("student")

// return getdata ? JSON.parse(getdata):[];

// })

// useEffect(()=>{

// localStorage.setItem("student",JSON.stringify(student))

// },[student]);

// const handlechange = (e)=>{

// setName(e.target.value)

// }

// const handleadd =()=>{


// if(!name.trim()) return;

// const newStudent = {

// id:Date.now(),
// name: name
// };

// setStudent((prev)=>[...prev,newStudent])

// setName("")

// }



// const handledelete = (id)=>{

// setStudent((prev)=>
  
//   prev.filter((student)=>student.id !== id)

// )

// }

//   return (
//     <>
//     <div>
//        <input type="text" value={name} placeholder=" enter value" onChange={handlechange} />

//        <button onClick={handleadd}>add</button>

//        {student.map((item)=>(

//           <div key={item.id}>
            
//             <h1>{item.name}</h1>
         
//           <button onClick={()=>handledelete(item.id)}>delete</button>
            
//             </div>
        
//         ))}
//     </div>
//     </>
//   )
// }

// export default App

//=====================================================================================================================================================================================================================

// import { useState, useEffect } from "react";

// const App = () => {

// console.log('component running')

// const [count, setCount] = useState(0)

// const [number,setNumber] = useState(0)

// useEffect(()=>{

// console.log('useEffect running')

// const timer = setInterval(()=>{

// setCount((prev) => prev + 10);

  
// },1000)

// return ()=>{

// clearInterval(timer)

// //this is called unmount

// }

// },[number])

// const datas = () =>{

// setNumber(number+1)

// }


//   return (
// <>
//      <div>  useEffect</div>

//      <h2>{count}</h2>

//      <p>{number}</p>

//      <button onClick={datas}> click</button>
//   </>
// )
// }

// export default App

//===================================================================================================================================================================================================================================



// const App = () => {

// const [userdatas,setUserDatas] = useState({username:"",userage:"",useremail:""})

// const [mydata,setMydata] = useState([])

// const handlechange = (e) =>{

// setUserDatas({...userdatas,[e.target.name]:e.target.value})

// }

// const handleclick =(e)=>{

// e.preventDefault()

// //const getdata = JSON.parse(localStorage.getItem("myregister")) || []

// const storedData = JSON.parse(localStorage.getItem("myregister"));

// const getdata = Array.isArray(storedData) ? storedData : [];

// // const checkemail = mydata.find(()=>e.email == userdatas.useremail)

// // console.log(checkemail)

// // if(checkemail)
// // {

// //   alert("already in use try different")

// //   return

// // }

// const obj = {userid:Date.now(),name:userdatas.username,age:userdatas.userage,email:userdatas.useremail}

// //console.log(obj)

//  getdata.push(obj)

// const change =JSON.stringify(getdata)

// localStorage.setItem("myregister",change)

// setUserDatas({username:"",userage:"",useremail:""})

// alert("successfully done")

// setMydata(getdata)

// }

// const getdatas =() =>{

// const get = JSON.parse(localStorage.getItem("myregister")) || [];

// // const change = JSON.parse()

// // console.log(change)

// setMydata(Array.isArray(get) ? get : [])

// }

// useEffect(()=>{

// getdatas()

// },[])

//   return (
//     <>
//     <div>
//              <form>

//                 <input type="text" name="username" placeholder="enter your name" value={userdatas.username} onChange={handlechange}  /> <br />

//                 <input type="text" name="userage" placeholder="enter your age" value={userdatas.userage} onChange={handlechange}  /> <br />
 
//                 <input type="text" name="useremail" placeholder="enter your email" value={userdatas.useremail} onChange={handlechange}  /> <br />

//                  <button onClick={handleclick}>register</button>
//              </form>
//     </div>

//     <div>

//        {mydata.map((e)=>(
  
//           <div key={e.userid}>

//               <h2>{e.name}</h2>

//               <p>{e.age}</p>

//               <p>{e.email}</p>
  
//           </div>
    
//       ))}

//     </div>
//     </>
//   )
// }

// export default App


//===================================================================================================================================================================================================================================


// const App = () => {

// const [datas,setDatas] = useState([])

// const [search,setSearch] = useState()

// const fetchDatas = async()=>{

// const getDatas = await fetch("https://dummyjson.com/products")

// // console.log(getDatas)

// const datas = await getDatas.json()

// //console.log(datas.products);

// setDatas(datas.products)


// }

// useEffect(()=>{

// ( async()=>{}  )

// },[])

// let product =[...datas] 

// const handleChange =(e)=>{

// const datas= e.target.value

// setSearch(datas)




// const searchdatas = product.filter((e)=>
  
//   e.title.toLowerCase().includes(search.toLowerCase()))

//   //console.log(searchdatas)

//   setDatas(searchdatas)

// }

//   return (
   
//       <>

//        <h1>this is app</h1>

//        <div>

//         <input type="text" onChange={handleChange}  />

//         {product.map((e)=>(

//           <div key={e.id}>

//                 {/* <img src="{e.images}" alt="" /> */}

//                <h4>{e.title}</h4>

//                <p>{e.price  }</p>

//           </div>

//         ))}

//        </div>


//       </>



//   )
// }

// export default App

//================================================================================================================================================================================================================================================
