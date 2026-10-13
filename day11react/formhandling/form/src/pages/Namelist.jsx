
// import { useState } from "react"

// const Namelist = () => {

// const [student,setStudent] = useState("");

// const [stu,setStu] = useState([]);


// const handleadd =()=>{

//        if (student.trim() === "") {

//         alert("please enter the student name")

//         return;
// }

//  setStu((prev) => [...prev, student.trim()]);
//     setStudent("");
//   };

//   return (
//     <div>

// <input type="text" placeholder="Enter student name" value={student} onChange={(e)=>setStudent(e.target.value)} />


// <button onClick={handleadd}>ADD STUDENT</button>

// <h3>Students:</h3>

// {stu.map((studentName,index)=>(

//     <p key={index}> {studentName}</p>
// ))}

//     </div>
//   )
// }

// export default Namelist


import { useState } from "react";

const Namelist = () => {
  const [student, setStudent] = useState("");
  const [stu, setStu] = useState([]);

  const handleadd = () => {
    if (student.trim() === "") {
      alert("Please enter the student name");
      return;
    }


    setStu((prev) => [...prev, student.trim()]);

    setStudent("");
  };

  return (
    <div className="text-center p-40 bg-amber-200 h-143">

      <input className="bg-blue-50 p-2"

        type="text"

        placeholder="Enter student name"

        value={student}

        onChange={(e) => setStudent(e.target.value)}

      />

      <button className="bg-amber-400 p-2 rounded " onClick={handleadd}>ADD STUDENT</button>

      <h3 className="font-bold p-10">Students:</h3>

      {stu.map((studentName, index) => (

        <p key={index}>{studentName}</p>

      ))}

    </div>
  );
};

export default Namelist;