import { useEffect, useMemo, useState } from "react"


const Numbers = () => {

//  const [data,setData] = useState([]);

const [number,setNumber] = useState("");

  
// const getdata = async ()=>{

//   try{

//     const response =  await fetch("https://dummyjson.com/users");



// if(!response.ok){

// throw new error("request is rejected");

// }

// const datas = await  response.json();

//   console.log(datas);


// setData(datas.users)

//   }
//   catch(error){

//   console.log("Error:", error.message);

//   }
// }

// useEffect(()=>{

// getdata();

// },[])

const result = useMemo(()=>{

console.log("useMemo is running")

let total = 0;

for(let i=0; i<100000;i++){

   total += 1;

}

return Number(number)*2

},[number])


const handlechange = (e) =>{

setNumber((e.target.value))

}

  return (
   <>
   
   <div className="bg-amber-300 h-60 text-center p-30 ">

    <input className="bg-black text-white p-2 w-60 rounded " type="number" value={number} placeholder="Enter a number.." onChange={handlechange}/>

    <h1  className="p-10 font-bold text-2xl">Double:{result}</h1>

          {/* {data.map((user)=>(

               <div key={user.id}>

                  <h2>{user.firstName}</h2>

                  <p>{user.email}</p>

               </div> */}

          {/* ))} */}

   
   </div>
   
   </>
  )
}


export default Numbers