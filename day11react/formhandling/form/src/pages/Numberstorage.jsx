
import { useState } from "react"

const Numberstorage = () => {

const [Num,setNum] = useState("")

const [addnum,setAddnum] =  useState([])

const handleclick = () =>{

if(Num.trim()===""){
    alert("please enter a number")
    return
}



const number = Number(Num);

// if( Num%2===0)
// {
//    alert("The Number is Even")    
// }
// else{
//     alert("The Number is Odd")
// }

setAddnum((prev)=>[...prev,Num.trim()]);

setNum("");

}


  return (
    <>
    <div className="text-center p-50 bg-lime-300 h-143 ">
     <input className="bg-rose-300 p-2 " type="text"  placeholder="Enter a number" value={Num} onChange={(e)=>(setNum(e.target.value))}  />
    
      <button  className="bg-green-950 text-white p-2 rounded-2xl" onClick={handleclick}> ADD NUMBERS </button>

        
        <h1 className="font-bold p-7 ">ADD NUMBERS:</h1>
        
        
        {addnum.map((addnumbers,index)=>(

      <p key={index}>

         {addnumbers}-{addnumbers%2===0?"even":"odd"}  
         
      </p>
   
     ))}
     
    </div>

    </>
  )
}

export default Numberstorage