import { useState } from "react"


const Employeelist = () => {

    const [fruit, setFruit] = useState ("")
    const [fruits,setFruits] = useState([])
    const [editIndex, setEditIndex] = useState(null);

    const handleadd = () => {

         if(fruit.trim() === ""){
            alert("Please Enter Fruit Name")
            return
         }



         if(editIndex !== null){
            const updatedfruits =fruits.map((item, index)=>
            index===editIndex?fruit.trim():item)
         
         setFruits(updatedfruits);
         setEditIndex(null);
         } else{
            setFruits((prev)=>[...prev,fruit.trim()])
         }

        //  setFruit("fruits[index]")
     
        //  setEditIndex(index);
      setFruit("");
    }
    const handleupdate =(index)=>{

        setFruit(fruits[index]);
      
        setEditIndex(index);
    
    }

    


  return (

    <>

    <div className="bg-amber-300 h-149 text-center p-38 font-bold">

        <h1 className="bg-amber-100 ">FRUIT LIST</h1>

       <input className="bg-blue-300 p-2" type="text"  placeholder=" Enter a Fruit Name" 
        value={ fruit}  onChange={(e)=>( setFruit(e.target.value))}/>

       <button className="bg-black text-white rounded-2xl p-2" onClick={handleadd}>{editIndex !== null ? "SAVE":"ADD FRUIT"}</button>
       
        <h2>FRUITS:</h2>

        {fruits.map((item,index)=>
        <div key={index}>

             <p>{item}</p>

             <button className="bg-pink-600" onClick={()=>handleupdate(index)}> UPDATE FRUIT NAME</button>

        </div>)}

       
    </div>

    </>

  )
}

export default Employeelist