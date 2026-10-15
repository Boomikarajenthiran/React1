
// import { Link } from "react-router-dom";

// const Navbar = () => {

//   return (
//     <>
//       <div  className="bg-blue-700 p-4 flex justify-between gap-5 text-white font-bold" >

//         <div>

//           <h1>FROM HANDLING</h1>

//         </div>
//         <div className=" flex justify-between gap-10 ">

//               <Link to="/"> CourseForm</Link>
//               <Link to="/employeeform"> EmployeeForm</Link>
//               <Link to="/expenseform">ExpenseForm</Link>
//               <Link to="/productform">ProductForm</Link>
//               <Link to="/studentmarkform">StudentMarkForm</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-700 p-4 flex justify-between gap-5 text-white font-bold">
      <div>
        <h1>FORM HANDLING</h1>
      </div>

      <div className="flex justify-between gap-10">


        <Link to="/">CourseForm</Link> 
        <Link to="/employeeForm">EmployeeForm</Link> 
        <Link to="/expenseForm">ExpenseForm</Link>
        {/* <Link to="/productForm">ProductForm</Link> */}
        <Link to="/studenMarkForm">StudenMarkForm</Link>


      </div>
    </div>
  );
};

export default Navbar;