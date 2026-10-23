
import {Routes,Route} from "react-router-dom"

import Navbar from "../componant/Navbar"

import Focus_clear from "../pages/Focus_clear"

import Pagenavigation from "../pages/Pagenavigation"

import PasswordShoworHid from "../pages/PasswordShoworHid"

import Stopwatch from "../pages/Stopwatch"


const AppRoutes = () => {
  return (
   <>
   
   <div>

            <Navbar/>

   <Routes>

            <Route path="/"   element={<Focus_clear/>}/>

             <Route path="/pagenavigation" element={<Pagenavigation/>}/>

             <Route path="/passwordShoworHide"   element={<PasswordShoworHid/>}/>

             <Route path="/stopwatch"   element={<Stopwatch/>}/>

   </Routes>

   </div>
   
   </>
  )
}

export default AppRoutes