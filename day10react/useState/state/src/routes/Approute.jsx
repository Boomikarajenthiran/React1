
import {Routes,Route} from "react-router-dom"
import Navbar from "../component/Navbar"
import Toggle from "../pages/Toggle"
import Updateobj from "../pages/Updateobj"
import Updateobjinarr from "../pages/Updateobjinarr"
import Studentmanage from "../pages/Studentmanage"
import Like from "../pages/Like"




const Approute = () => {
  return (
    <div>
 
 <Navbar/>

 <Routes>

        <Route path="/" element={<Toggle/>}/>

        <Route path="/updateobj" element={<Updateobj/>}/>

         <Route path="/updateobjinarr" element={<Updateobjinarr/>}/>

         <Route path="/studentmanage" element={<Studentmanage/>}/>

         <Route path="/like" element={<Like/>}/>

 </Routes>


    </div>
  )
}

export default Approute