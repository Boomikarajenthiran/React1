import { Routes,Route} from "react-router-dom"
import Array from '../pages/Array'
import Object from '../pages/Object'
import Toggle from '../pages/Toggle'
import Navbar from "../components/Navbar"

const Routeapp = () => {
  return (
    <div>

        <Navbar/>

        <Routes>

         <Route path="/" element={<Array/>}/>
         <Route path="/object" element={<Object/>}/>
         <Route path="/toggle" element={<Toggle/>}/>
        
        </Routes>
      
    </div>
  )
}

export default Routeapp
