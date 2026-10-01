

// import Student from "./components/Student";
// import Skills from "./components/Skills";
// import Objectrendering from "./components/Objectrendering";
// import Arrayobj from "./components/Arrayobj";

// const App = () => {

//   const studentName ="Boomika";
//   const age = 22;
//   const course = "React";
//   const fees = 45000;

//   const myskills=["HTML", "CSS", "JavaScript", "React", "Node"]
  
//   const student={
//                     name:"Boomika",
//                     age : 21,
//                     course: "MERN Stack",
//                     city:"Chennai"
//                 }

//   const dataStudents = [

//     { id: 7187,
//       name: "Boomika",
//       course: "React" },

//     { id: 9245, 
//       name: "Priya", 
//       course: "Node" },

//     { id: 6393, 
//       name: "Akila", 
//       course: "MongoDB" }

// ]
//   return (
//     <>
//     <div>
//        <div>
//         {/* task 1          */}
//          <Student 

//             studentName={studentName}
//             age={age}
//             course={course}
//             fees={fees}
//          />
//         </div>

//         {/* task 2 */}
//         <div>

//             <Skills myskills={myskills}/>

//         </div>
//          {/* task 3 */}
//         <div>

//           <Objectrendering student={student} />

//         </div>

//         {/* task 4 */}

//         <div>

//               <Arrayobj dataStudents={dataStudents}/>

//         </div>
// </div>
        
//     </>
//   )
// }

//  export default App

import React from 'react'

const App = () => {

const [count,setcount]=useState(0);

  return (
    <div>

      <button onClick={()=>setcount(count + 1)}>{count}</button>
      




    </div>
  )
}

export default App
