
// import {Routes, Route} from "react-router-dom"

// import Navbar from "../component/Navbar"

// import CourseForm from "../pages/CourseForm"

// import EmployeeForm from "../pages/EmployeeForm"

// import ExpenseForm from "../pages/ExpenseForm"

// import ProductForm from "../pages/ProductForm"

// import StudenMarkForm from "../pages/StudenMarkForm";

// const Approutes = () => {
//     return (

//     <div>
//             <Navbar/>

//             <Routes>
                     
//                   <Route path="/" element={< CourseForm/>}/> 
//                    <Route path="/employeeForm" element={<EmployeeForm/>}/>
//                   <Route path="/expenseForm" element={<ExpenseForm/>}/>
//                   <Route path="/productForm" element={<ProductForm/>}/>
//                   <Route path="/studenMarkForm" element={<StudenMarkForm/>}/>

//             </Routes>
//     </div>
//   )
// }

// export default Approutes



import { Routes, Route } from "react-router-dom";

import Navbar from "../component/Navbar";

import CourseForm from "../pages/CourseForm";
import EmployeeForm from "../pages/EmployeeForm";
import ExpenseForm from "../pages/ExpenseForm";
// import ProductForm from "../pages/ProductForm";
import StudenMarkForm from "../pages/StudenMarkForm";

const Approutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<CourseForm />} />
        <Route path="/employeeForm" element={<EmployeeForm />} />
        <Route path="/expenseForm" element={<ExpenseForm />} />
        {/* <Route path="/productForm" element={<ProductForm />} /> */}
        <Route path="/studenMarkForm" element={<StudenMarkForm />} />
      </Routes>
    </div>
  );
};

export default Approutes;

