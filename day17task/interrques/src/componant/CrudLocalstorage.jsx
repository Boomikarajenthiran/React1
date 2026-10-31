import { useState, useEffect } from "react";

function CrudLocalstorage() {

    const [employees, setEmployees] = useState(() => {
        const stored = localStorage.getItem("employees");

        return stored ? JSON.parse(stored) : [];
    });

    const [form, setForm] = useState({
        name: "",
        salary: ""
    });

    const [editId, setEditId] = useState(null);

    // Save data in localStorage
    useEffect(() => {
        localStorage.setItem(
            "employees",
            JSON.stringify(employees)
        );
    }, [employees]);

    // Input handling
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Add and Edit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim() || form.salary === "") {
            alert("Please fill all fields");
            return;
        }

        if (editId !== null) {

            // Edit employee
            let updated = employees.map(emp =>
                emp.id === editId
                    ? { ...emp, ...form, salary: Number(form.salary) }
                    : emp
            );

            setEmployees(updated);
            setEditId(null);

        } else {

            // Add employee
            let newEmployee = {
                id: Date.now(),
                name: form.name,
                salary: Number(form.salary)
            };

            setEmployees([...employees, newEmployee]);
        }

        setForm({ name: "", salary: "" });
    };

    // Edit button
    const handleEdit = (emp) => {
        setForm({
            name: emp.name,
            salary: String(emp.salary)
        });

        setEditId(emp.id);
    };

    // Delete button
    const handleDelete = (id) => {
        let updated = employees.filter(emp => emp.id !== id);

        setEmployees(updated);
    };

    return (
        <>
            <h2>Employee CRUD</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Employee Salary"
                    value={form.salary}
                    onChange={handleChange}
                />

                <button type="submit">
                    {editId !== null ? "Update" : "Add Employee"}
                </button>

            </form>

            <hr />

            {employees.map(emp => (
                <div key={emp.id}>
                    <h3>{emp.name}</h3>

                    <p>Salary: ₹{emp.salary}</p>

                    <button onClick={() => handleEdit(emp)}>
                        Edit
                    </button>

                    <button onClick={() => handleDelete(emp.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
}

export default CrudLocalstorage;