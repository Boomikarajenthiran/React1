
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <> 
   <div className="bg-amber-200 flex justify-between items-center  p-4" >

      <div className="mx-15 font-semibold ">

             LOGIN & REGISTERATIONS

      </div>
      <div className="mx-15 flex gap-15 font-semibold">

          <Link to={"/home"} > Home </Link>
          <Link  to={"/home"} > Register</Link>
          <Link className="bg-red-500 p-1 rounded w-20 text-center"  to={"/login"} >Login</Link>
      </div>
   </div>
   </>
  )
}

export default Navbar