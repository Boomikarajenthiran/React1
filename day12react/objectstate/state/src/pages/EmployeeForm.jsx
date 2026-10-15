
import { useState } from "react";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!employee.name || !employee.department || !employee.salary) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex === null) {
      setEmployees([...employees, employee]);
    } else {
      setEmployees(
        employees.map((item, index) =>
          index === editIndex ? employee : item
        )
      );
      setEditIndex(null);
    }

    setEmployee({ name: "", department: "", salary: "" });
  };

  const handleEdit = (index) => {
    setEmployee({ ...employees[index] });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setEmployees(employees.filter((item, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setEmployee({ name: "", department: "", salary: "" });
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div className="bg-fuchsia-500 h-130 text-center p-30 font-bold">
      <h2>Employee Form</h2>

      <input
        className="bg-white border-2 gap-2"
        name="name"
        placeholder="Employee Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        className="bg-white  border-2"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        className="bg-white  border-2"
        name="salary"
        type="number"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
      />

      <button className="bg-amber-800 p-2 rounded-2xl" onClick={handleSubmit}>
        {editIndex === null ? "Add Employee" : "Update Employee"}
      </button>

      <table border="1">
        <thead>
          <tr >
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.department}</td>
              <td>{item.salary}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeForm;