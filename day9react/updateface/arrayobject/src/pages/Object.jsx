import { useState } from "react" 

const Object = () => {

const [product,setProduct] = useState({name: "Laptop",price: 45000,stock: 10})

const updateprice =() =>{

    setProduct({...product,price : "50000"})

    }

const addbrand = () =>{ 

    setProduct({...product,brand: "Dell" })

}

  return (
    <div className="bg-gray-300 text-center h-157 font-bold p-20">
      
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.stock}</p>
        <p>{product.brand}</p>

        <button className="bg-green-950 text-white p-2 rounded-2xl" onClick={updateprice}> UPDATED PRICE</button>

        <button className="bg-amber-950 text-white p-2 rounded-2xl"onClick={addbrand}> ADD BRAND </button>


    </div>
  )
}

export default Object
