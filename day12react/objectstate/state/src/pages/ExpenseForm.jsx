import { useState } from "react";

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!expense.title || !expense.amount || !expense.category) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex === null) {
      setExpenses([...expenses, expense]);
    } else {
      setExpenses(
        expenses.map((item, index) =>
          index === editIndex ? expense : item
        )
      );
      setEditIndex(null);
    }

    setExpense({ title: "", amount: "", category: "" });
  };

  const handleEdit = (index) => {
    setExpense({ ...expenses[index] });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setExpenses(expenses.filter((item, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setExpense({ title: "", amount: "", category: "" });
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  const totalExpense = expenses.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  return (
    <div className="bg-lime-300 h-140 text-center font-bold p-30">
      <h2>Expense Form</h2>

      <input
        className="bg-white  border-2" 
        name="title"
        placeholder="Expense Title"
        value={expense.title}
        onChange={handleChange}
      />

      <input
        className="bg-white  border-2"
        name="amount"
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
      />

      <input
        className="bg-white border-2"
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
      />

      <button className="bg-black text-white p-2 rounded-2xl" onClick={handleSubmit}>
        {editIndex === null ? "Add Expense" : "Update Expense"}
      </button>

      <h3>Total Expense: ₹{totalExpense}</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>₹{item.amount}</td>
              <td>{item.category}</td>
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

export default ExpenseForm;