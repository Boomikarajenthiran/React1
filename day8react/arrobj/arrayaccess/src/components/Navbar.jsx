
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
//  <div>
    <div className=" bg-pink-700 p-4 gap-10 flex justify-between text-white border-2"> 
     
         <div>

             <h1>NAVBAR</h1>

         </div>
         <div className=" flex gap-15">

            <Link to="/">Array</Link>
            <Link to="/object">Object</Link>
            <Link to="/toggle">Toggle</Link>

         </div>

       </div> 

    // </div>

  )
}

export default Navbar
