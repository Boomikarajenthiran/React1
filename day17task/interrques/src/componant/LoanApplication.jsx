
import { useState } from "react";

function LoanApplication() {

    const [step, setStep] = useState(1);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        job: "",
        company: "",
        salary: "",
        loanAmount: "",
        loanPurpose: ""
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Validate each step
    const validateStep = () => {

        if (step === 1) {
            if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
                alert("Please fill all personal details");
                return false;
            }
        }

        if (step === 2) {
            if (!form.job.trim() || !form.company.trim() || !form.salary) {
                alert("Please fill all employment details");
                return false;
            }

            if (Number(form.salary) <= 0) {
                alert("Enter a valid salary");
                return false;
            }
        }

        if (step === 3) {
            if (!form.loanAmount || !form.loanPurpose.trim()) {
                alert("Please fill all loan details");
                return false;
            }

            if (Number(form.loanAmount) <= 0) {
                alert("Enter a valid loan amount");
                return false;
            }
        }

        return true;
    };

    // Next step
    const handleNext = () => {

        if (validateStep()) {
            setStep(prev => prev + 1);
        }
    };

    // Previous step
    const handlePrevious = () => {
        setStep(prev => prev - 1);
    };

    // Final submission
    const handleSubmit = () => {

        const application = {
            ...form,
            salary: Number(form.salary),
            loanAmount: Number(form.loanAmount)
        };

        console.log("Loan Application:", application);

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <>
                <h2>Application Submitted Successfully!</h2>
                <pre>
                    {JSON.stringify({
                        ...form,
                        salary: Number(form.salary),
                        loanAmount: Number(form.loanAmount)
                    }, null, 2)}
                </pre>
            </>
        );
    }

    return (
        <>
            <h2>Loan Application</h2>

            <h3>Step {step} of 4</h3>

            <p>
                {step === 1 && "Personal Details"}
                {step === 2 && "Employment Details"}
                {step === 3 && "Loan Details"}
                {step === 4 && "Review Details"}
            </p>

            <hr />

            {/* STEP 1 */}
            {step === 1 && (
                <>
                    <h3>Personal Details</h3>

                    <input
                        name="name"
                        placeholder="Enter Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        name="phone"
                        placeholder="Enter Phone"
                        value={form.phone}
                        onChange={handleChange}
                    />
                </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
                <>
                    <h3>Employment Details</h3>

                    <input
                        name="job"
                        placeholder="Job Role"
                        value={form.job}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        name="salary"
                        type="number"
                        placeholder="Monthly Salary"
                        value={form.salary}
                        onChange={handleChange}
                    />
                </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
                <>
                    <h3>Loan Details</h3>

                    <input
                        name="loanAmount"
                        type="number"
                        placeholder="Loan Amount"
                        value={form.loanAmount}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        name="loanPurpose"
                        placeholder="Loan Purpose"
                        value={form.loanPurpose}
                        onChange={handleChange}
                    />
                </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
                <>
                    <h3>Review Application</h3>

                    <h4>Personal Details</h4>
                    <p>Name: {form.name}</p>
                    <p>Email: {form.email}</p>
                    <p>Phone: {form.phone}</p>

                    <h4>Employment Details</h4>
                    <p>Job: {form.job}</p>
                    <p>Company: {form.company}</p>
                    <p>Salary: ₹{form.salary}</p>

                    <h4>Loan Details</h4>
                    <p>Loan Amount: ₹{form.loanAmount}</p>
                    <p>Purpose: {form.loanPurpose}</p>
                </>
            )}

            <hr />

            {/* BUTTONS */}
            {step > 1 && (
                <button onClick={handlePrevious}>
                    Previous
                </button>
            )}

            {step < 3 && (
                <button onClick={handleNext}>
                    Next
                </button>
            )}

            {step === 3 && (
                <button onClick={handleNext}>
                    Review
                </button>
            )}

            {step === 4 && (
                <button onClick={handleSubmit}>
                    Submit Application
                </button>
            )}

        </>
    );
}

export default LoanApplication;
