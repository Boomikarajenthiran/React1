import{Link} from "react-router-dom"

const Navbar = () => {
  return (
  <>
  
    <div className=" bg-amber-300 flex gap-5 p-5 justify-between ">

           <div>

              <h1>LOGO</h1>

           </div>
           <div  className="flex gap-10 "  >
             
            <Link  to="/">Focus_clear</Link>
            <Link  to="/pagenavigation" >Pagenavigation</Link>
            <Link  to="/passwordShoworHide" >PasswordShoworHide</Link>
            <Link  to="/stopwatch" >Stopwatch</Link>


           </div>
    </div>
  
  </>
  )
}

export default Navbar