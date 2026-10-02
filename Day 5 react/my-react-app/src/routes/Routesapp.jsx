import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Help from '../pages/Help'
import Contact from '../pages/Contact'
import Navbar from '../Components/Navbar'



const Routesapp = () => {
  return (
    <div>

      <Navbar/>

         <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Help" element={<Help/>} />
           <Route path="/Contact" element={<Contact/>} />

          </Routes>     



    </div>
  )
}

export default Routesapp
