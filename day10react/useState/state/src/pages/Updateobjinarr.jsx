
import { useState } from "react"

const Updateobjinarr = () => {

const [products, setProducts] = useState([

  { id: 1, name: "Laptop", price: 50000, inStock: true },
 
  { id: 2, name: "Phone", price: 20000, inStock: false },
  
  { id: 3, name: "Tablet", price: 15000, inStock: true }

]);

const togglestock=(id)=>

setProducts((prevProducts)=>prevProducts.map((productss)=>
    
    productss.id === id
    
    ? {...productss,inStock:!productss.inStock}
    
    :productss))


  return (
  <div  className="bg-lime-200 text-center font-bold p-30">
    {products.map((product )=>(

       <div key={product.id}>

       <h1>{product.name}</h1>

       <p> price: {product.price}</p>

       <p> stock :{product.inStock? "IN STOCK":"OUT OF STOCK"}</p>

          <button  className="bg-amber-400 rounded-2xl p-2"  onClick={()=>{togglestock(product.id)}}>TOGGLE STOCK</button>

           <hr />
          
       </div>


        
    ))}  
    </div>
   
    

  )
}

export default Updateobjinarr