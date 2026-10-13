import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="bg-blue-200 flex justify-between p-4 font-bold">
        <div >

              <h1>FORM HANDLING</h1>

         </div>

         <div className="flex gap-10" >

              <Link to="/">Namelist</Link>
              <Link to="/courselist">Courselist</Link>
              <Link to="/numberstorage">Numberstorage</Link>
              <Link to="/employeelist">Employeelist</Link>

         </div>
    
    </div>

    </>

  );
};

export default Navbar;