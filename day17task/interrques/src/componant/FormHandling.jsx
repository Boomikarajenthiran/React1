import { useState } from "react";

function FormHandling() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [submitted, setSubmitted] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.age) {
            alert("Please fill all fields");
            return;
        }

        setSubmitted(form);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    value={form.age}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>

            </form>

            {submitted && (
                <pre>{JSON.stringify(submitted, null, 2)}</pre>
            )}
        </>
    );
}

export default FormHandling;