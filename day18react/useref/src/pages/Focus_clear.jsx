

import { useRef } from "react";

const Focus_clear = () => {

const nameRef = useRef(null);

const emailRef = useRef(null);

const handlename = () =>{

nameRef.current.focus()

}
const handleemail = () =>{

emailRef.current.focus();
  
}
const handleclear = () =>{

nameRef.current.value = ""

emailRef.current.value= ""
  
}
const handlesubmit = () =>{

  alert("name:"+nameRef.current.value +"\n email:"+emailRef.current.value)


}


  return (
   <>
   
   <div className="bg-amber-200 h-150 text-center p-20">


                <h2 className="text-fuchsia-700 font-bold p-10 text-2xl">Focus and Clear Form</h2>

    <input type="text" placeholder="Enter name" ref={nameRef} />   <br />

    <input type="text" placeholder="Enter email" ref={emailRef} /> <br />

                  <button  className="text-lime-600 font-bold bg-blue-200 rounded"  onClick={handleemail}> Email button</button>   <br />
    
                  <button  className="text-blue-400 font-bold bg-amber-100 rounded "  onClick={handlename}> Name button</button>  <br />
    
                  <button  className="text-red-600 font-bold bg-rose-200 rounded "  onClick={handleclear}> Clear button</button>    <br />
    
                  <button   className="text-emerald-950 font-bold bg-white rounded" onClick={handlesubmit}> Submit button</button>   <br />

   </div>
   
   </>
  )
}

export default Focus_clear