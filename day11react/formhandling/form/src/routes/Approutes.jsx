
import {Routes, Route} from "react-router-dom"

import Navbar from "../component/Navbar"

import Namelist from "../pages/Namelist" 

import Courselist from "../pages/Courselist"

import Numberstorage from "../pages/Numberstorage"
import Employeelist from "../pages/Employeelist"

const Approutes = () => {
  return (
    <div >

            <Navbar/>

          <Routes>

            <Route path="/" element={<Namelist/>}/>

            <Route path="/courselist" element={<Courselist/>}/>

            <Route path="/numberstorage" element={<Numberstorage/>}/>
  
            <Route path="/employeelist" element={<Employeelist/>}/>

         </Routes>
  
    </div>
  
)

}

export default Approutes