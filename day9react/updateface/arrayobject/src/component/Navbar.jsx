import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-zinc-900 p-4 gap-10 flex justify-between text-white border-2 ">
         <div>

             <h1>ARRAY & OBJECT </h1>

         </div>

         <div className="flex justify-between gap-10">

            <Link to="/">Primitivestate</Link>
             <Link to="/array">Array</Link>
              <Link to="/object">Object</Link>
               <Link to="/arrayofobj">Arrayofobj </Link>
                 <Link to="/booleanstate">Booleanstate</Link>

         </div>
       
      
    </div>
  )
}

export default Navbar
