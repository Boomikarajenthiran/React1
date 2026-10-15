import { useState } from "react";

const CourseForm = () => {
  const [course, setCourse] = useState({
    name: "",
    trainer: "",
    duration: "",
  });

  const [courses, setCourses] = useState([]);

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (!course.name || !course.trainer || !course.duration) {
      alert("Please fill all fields");
      return;
    }

    setCourses([...courses, course]);
    setCourse({ name: "", trainer: "", duration: "" });
  };

  const handleDelete = (index) => {
    setCourses(courses.filter((item, i) => i !== index));
  };

  return (
    <div className="bg-amber-200 h-130 text-center p-30 font-bold " >
        
      <h1 className="text-red-600 font-bold ">Course Form</h1>

      <input
        className="bg-gray-500 rounded-2xl p-2"
        name="name"
        placeholder="Course Name"
        value={course.name}
        onChange={handleChange}
      />
       <br />

      <input
        className="bg-blue-500 rounded-2xl p-2"
        name="trainer"
        placeholder="Trainer Name"
        value={course.trainer}
        onChange={handleChange}
      />
       <br />

      <input
        className="bg-emerald-400 rounded-2xl p-2"
        name="duration"
        placeholder="Duration"
        value={course.duration}
        onChange={handleChange}
      />
      <br />

      <button className="bg-amber-500 p-2  rounded-2xl" onClick={handleAdd}>Add Course</button>

      {courses.length === 0 ? (
        <p>No courses added yet.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Trainer</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.trainer}</td>
                <td>{item.duration}</td>
                <td>
                  <button  onClick={() => handleDelete(index)}>
                    Delete
                  </button>

                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseForm;