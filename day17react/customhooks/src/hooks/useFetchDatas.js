import { useEffect, useState } from "react"


const useFetchDatas = (url) => {

    const [datasave,setDatasave] = useState([])
  
  const getDatas = async()=>{

//   const datas = await fetch(url)

  try{

  const datas = await fetch(url) 

  const changes = await datas.json()

   setDatasave(changes.posts)

  }
  
  catch(error){

console.log('error',error.message);

  }
  }

  useEffect(()=>{

    getDatas()

  },[])

 return {datasave}

}

export default useFetchDatas