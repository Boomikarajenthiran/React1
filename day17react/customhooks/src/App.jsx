
// import useCustomhooks from "./hooks/useCustomhooks";

import { useRef } from "react"

// import useCounter from "./hooks/useCounter"


// const App = () => {

// const {value,handlechange} = useCustomhooks()

//   return (
//    <>
         
//         <h1>{value}</h1>

//         <button onClick={handlechange}>click</button>
   
//    </>
//   )
// }

// export default App



// const App = () => {

// const counter1 = useCounter(0,10)

// const counter2 = useCounter(100,10)

//   return (
//    <div>

//       <h2>count:{counter1.count}</h2>

//      <button onClick={counter1.increment}>increment</button>

//       <button onClick={counter1.decrement}>decrement</button>

//        <button onClick={counter1.reset}>reset</button>
            
//    </div>
//   )
// }

// export default App


import useFetchDatas from "./hooks/useFetchDatas"

const App = () => {
  
  const {datasave} = useFetchDatas("https://dummyjson.com/posts")
  
  console.log(datasave);

  return (
  <>
  
   <div >

    {datasave.map((e,i)=>(

       <div key={e.id}>

          <h3>{e.title}</h3>

       </div>

    ))}

   </div>
  
  </>
  )
}

export default App


