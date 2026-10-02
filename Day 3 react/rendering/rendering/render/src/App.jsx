function App() {

  const studentName = "Arun";
  const age = 22;
  const course = "React";
  const fees = 15000;


  const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

  
  const student = {
    name: "Priya",
    age: 21,
    course: "MERN Stack",
    city: "Chennai",
  };

    const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" },
  ];

  return (
    <div>
    
      <h1> Primitive Data</h1>

      <h2>{studentName}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Fees: {fees}</p>

      <hr />

    
      <h1>Skills</h1>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <hr />

   
      <h1> Student Object</h1>

      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>

      <hr />

     
      <h1> Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default App;