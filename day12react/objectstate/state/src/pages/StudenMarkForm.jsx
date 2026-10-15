import { useState } from "react";

const StudenMarkForm = () => {
  const [student, setStudent] = useState({
    name: "",
    tamil: "",
    english: "",
    maths: "",
  });

  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !student.name ||
      student.tamil === "" ||
      student.english === "" ||
      student.maths === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const marks = [
      Number(student.tamil),
      Number(student.english),
      Number(student.maths),
    ];

    if (marks.some((mark) => mark < 0 || mark > 100)) {
      alert("Marks must be between 0 and 100");
      return;
    }

    if (editIndex === null) {
      setStudents([...students, student]);
    } else {
      setStudents(
        students.map((item, index) =>
          index === editIndex ? student : item
        )
      );
      setEditIndex(null);
    }

    setStudent({ name: "", tamil: "", english: "", maths: "" });
  };

  const handleEdit = (index) => {
    setStudent({ ...students[index] });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((item, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setStudent({ name: "", tamil: "", english: "", maths: "" });
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div className="bg-orange-400 h-140 text-center font-bold p-30 ">
      <h2>Student Marks Form</h2>

      <input
        className="bg-white border-2 rounded-2xl p-2 "
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />
      <br />

      <input
       className="bg-white border-2 rounded-2xl p-2 "
        name="tamil"
        type="number"
        placeholder="Tamil Marks"
        value={student.tamil}
        onChange={handleChange}
      />
      <br />

      <input
       className="bg-white border-2 rounded-2xl p-2 "
        name="english"
        type="number"
        placeholder="English Marks"
        value={student.english}
        onChange={handleChange}
      />
      <br />

      <input
       className="bg-white border-2 rounded-2xl p-2 "
        name="maths"
        type="number"
        placeholder="Maths Marks"
        value={student.maths}
        onChange={handleChange}
      />
    <br />
      <button  className="bg-black text-white p-2 rounded-2xl" onClick={handleSubmit}>
        {editIndex === null ? "Add Student" : "Update Student"}
      </button>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
            <th>Total</th>
            <th>Average</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item, index) => {
            const total =
              Number(item.tamil) +
              Number(item.english) +
              Number(item.maths);

            const average = total / 3;

            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.tamil}</td>
                <td>{item.english}</td>
                <td>{item.maths}</td>
                <td>{total}</td>
                <td>{average.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudenMarkForm;