
// import { useState } from "react"


// import Toggle from "./assets/pages/Toggle"

// const App = () => {

//   const [add,setAdd] = useState(" ")

//   const[savedata,setSavedata] = useState([])

//   const handlechange =(e) =>{

//     const value = e.target.value    

//           setAdd(value)   

//           //  if(value == "  "){
//           //   alert("PLEASE ENTER")
//           //   return
//           //  }
//           //  if(value%2===0){
//           //   alert("EVEN NUMBER")
//           //  }else{
//           //   alert("ODD NUMBER")
//           //  }
//             }

//           const handleclick =() => {

//            setSavedata( (p)=>[...p,add])

//            setAdd("")




//           // const copy = [...savedata,"123456789"]

//           // setSavedata(copy)

//           // const copy=[...savedata]
//           // copy.push(("asdfghjkl"))
//           // setSavedata(copy)

            

             
//           //  if(add % 2 == 0){

//           //   alert("EVEN NUMBER") 
//           //   return
//           //  }
//           //  else{
//           //   alert("ODD NUMBER");
//           //  }

        
//           }
      
// const handleEdit  = (add)=>{

//    setAdd(add )

// }

// const handleDelete = (newdata) =>{

//       const copy = [...savedata]

//       const deletedata = copy.filter((e,i)=> i!==newdata)

//        setSavedata(deletedata)

// }



//   return (
//    <>

//       {/* {add} */}

     

//      {/* <h1>{savedata   }</h1> */}

//    <input type="text" value={add} onChange={handlechange } />

//    <button onClick={handleclick}> ADD TASK</button>

//     <div>
//        {savedata.map((e,i)=>(

//          <div key= {i}>

//            <h4> TASK:{i+1}</h4>

//            <p>{e}</p>

//            <button onClick={ ()=>handleEdit(e) }> EDIT</button>

//            <button  onClick={ ()=>handleDelete(i)}> DELETE</button>


//           </div>

        


//        ))}


//       </div>

//    </>

//   )

// }

// export default App





import Approute from'./routes/Approute'

const App = () => {
  return (

    <div>

    <Approute/>
    
    </div>
  )
}

export default App