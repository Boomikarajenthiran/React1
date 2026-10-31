import { useState } from "react";

function AddDelete() {

    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");

    const addStudent = () => {

        if (name.trim() === "") {
            alert("Enter student name");
            return;
        }

        setStudents([...students, name]);
        setName("");
    };

    const deleteStudent = (index) => {

        let updatedStudents = students.filter(
            (student, i) => i !== index
        );

        setStudents(updatedStudents);
    };

    return (
        <>
            <h2>Student List</h2>

            <input
                type="text"
                value={name}
                placeholder="Enter student name"
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addStudent}>Add</button>

            {students.map((student, index) => (
                <div key={index}>
                    <span>{student}</span>

                    <button onClick={() => deleteStudent(index)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
}

export default AddDelete;