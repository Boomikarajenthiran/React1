import { useState } from "react"





const useCounter = (initvalue=0,step=1) => {
  
const [count,setCount] = useState(initvalue,)

const increment = () =>{

setCount((p)=>p + step)

}

const decrement =()=>{

setCount((p)=>p - step)

}
const reset =()=>{

setCount(initvalue)

}

return{count,increment,decrement,reset}


}

export default useCounter