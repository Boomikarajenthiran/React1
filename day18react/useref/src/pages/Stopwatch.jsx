

import { useRef } from "react";

const App = () => {

const myRef = useRef(0);

const timer = useRef(null)

const newvalue = useRef(0)

const handlestart = ()=>{

     timer.current = setInterval(()=>{

    const datas = newvalue.current += 1

    myRef.current.innerText=datas

 },1000)
}

const handlestop = () =>{

    clearInterval(timer.current)

}

const handlereset = () =>{

     clearInterval(timer.current);
     timer.current =null;
     newvalue.current = 0;
     myRef.current.innerText =0;

}
  return (
  <>
  <div className="bg-cyan-200 h-150 text-center p-20">
       <p className="font-bold p-5"> Count value</p>
       <h2 className="text-2xl p-10" ref={myRef}></h2>

       <button className="bg-lime-400 rounded p-2 w-15" onClick={handlestart}> START</button>      

       <button className="bg-red-600 rounded p-2 w-15 " onClick={handlestop}> STOP</button>

       <button className="bg-blue-500 rounded p-2 w-15" onClick={handlereset}>RESET</button>
  </div> 
  </>
  )
}
export default App