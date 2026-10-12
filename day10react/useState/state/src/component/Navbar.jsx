import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="bg-black text-white flex p-4 justify-between ">
         <div>

             <h1>ARRAY & OBJECT </h1>

         </div>

         <div className=" flex justify-between gap-10 " >

            <Link to="/">Toggle</Link>
             <Link to="/updateobj">Updateobj</Link>
              <Link to="/updateobjinarr">Updateobjinarr</Link>
               <Link to="/studentmanage">Studentmanage</Link>
                <Link to="/like">Like</Link>


         </div>
       </div>  
  )
}
export default Navbar