
import { useState } from "react"

const Updateobj = () => {
  
const [user,setUser] = useState({ 
  
    name: "Rahul",
    age: 22,
    city: "Chennai"
})

const handlechange = () => {

  setUser({   ...user,   name:  "Arjun"   }) 

}

const handleincrease = () => {

      setUser({...user,age: user.age+1})

}

const handlecity = () =>{

setUser({...user, city: "Banglore"})

}
    return (
    
        <div className="bg-blue-400 h-140 text-center font-medium p-30">

           <h1>{user.name}</h1>
           <p>{user.age}</p>
           <p>{user.city}</p>

           <button className="bg-red-500 rounded-2xl p-2" onClick={ handlechange}>CHANGE NAME</button>

           <button  className="bg-lime-400 rounded-2xl p-2"  onClick={handleincrease}>INCREASE AGE</button>

           <button  className="bg-pink-300 rounded-2xl  p-2" onClick={handlecity}> CHANGE CITY </button>

        </div>
  )
}

export default Updateobj