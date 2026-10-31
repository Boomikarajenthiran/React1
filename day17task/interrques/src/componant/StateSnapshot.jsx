import { useState } from "react";

function StateSnapshot() {

    const [students, setStudents] = useState(["Arun", "Priya"]);

    const addStudent = () => {

        let newStudent = "Kumar";

        let updatedStudents = [...students, newStudent];

        setStudents(updatedStudents);

        console.log("Old Array:", students);

        console.log("New Array:", updatedStudents);
    };

    return (
        <>
            <h2>{students.join(", ")}</h2>

            <button onClick={addStudent}>Add Student</button>
        </>
    );
}

export default StateSnapshot;