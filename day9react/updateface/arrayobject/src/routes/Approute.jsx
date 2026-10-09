
import {Routes,Route} from "react-router-dom"

import Navbar from "../component/Navbar"
import Prmitivestate from "../pages/Prmitivestate"
import Array from "../pages/Array"
import Object from "../pages/Object"
import Arrayofobj from "../pages/Arrayofobj"
import Booleanstate from "../pages/Booleanstate"


const Approute = () => {
  return (
    <div>

         <Navbar/>

         <Routes>

             <Route path="/" element={<Prmitivestate/>}/>  

              <Route path="/array/" element={<Array/>}/>

               <Route path="/object" element={<Object/>}/>

                <Route path="/arrayofobj" element={<Arrayofobj/>}/>  

                 <Route path="/booleanstate" element={<Booleanstate/>}/>

         </Routes>

    </div>
  )
}

export default Approute
