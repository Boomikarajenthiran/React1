
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-amber-500 p-2 flex justify-between items-center' >
        <div className='w-15 h-15' >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8EXOwXJZDULu_mc8I68CdsMDDGz-BE5GvYcsZP6pEw&s=10" alt="react image" />
        </div>
        <div  className='flex gap-15 text-white ' >

            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/help" >Help</Link>
            <Link to="/contact" >Contact</Link>

       </div>
      </div>
    </>
  )
}

export default Navbar
