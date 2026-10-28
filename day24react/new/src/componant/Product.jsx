import { useMemo, useState } from "react"

function shortproducts(products, search) {
    
console.log("Filtering products is running...");

  return products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
}



const Product = () => {

const [search, setSearch] = useState("");

const [count, setCount] = useState(0);

const newProduct=[
    {id:101,name:"react", price:15000},
    {id:102,name:"node", price:17000},
    {id:103,name:"js", price:10000}

]

const filteredProducts = useMemo((e)=>{

return shortproducts(newProduct,search);
},[search])




  return (
   <>
   
   <div className="text-center bg-blue-300 h-170 p-30 font-bold">
      
         <h1 className="text-3xl">product lists</h1>

         <input className="bg-amber-50 text-black rounded text-center" type="text" placeholder="search products.." value={search} onChange={(e)=>setSearch(e.target.value)}  />


      <div className="p-19">

         <h2 className="bg-amber-300 rounded  ">{count}</h2>

         <button className="font-bold bg-fuchsia-400 " onClick={()=>setCount(count+1)}>increament</button>

      </div>

      
         {filteredProducts.map((datas)=>(

           <div key={datas.id}>
       
                <h3>ID:{datas.id}</h3>

                <p>NAME:{datas.name}</p>

              <p>PRICE:${datas.price}</p>

         </div>
       ))} 


  {filteredProducts.length === 0 && <p>No products found</p>}

   </div>
   
  

   </>
  )
}


export default Product