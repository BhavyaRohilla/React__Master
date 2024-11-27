import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    date: "",
    category: "Food",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
      alert("Please enter a valid amount greater than zero!");
      return;
    }

    // Create new expense with a unique id using uuid
    const newExpense = {
      ...formData,
      id: uuidv4(), // Generate a unique id using uuid
    };

    onAddExpense(newExpense);

    // Reset form fields
    setFormData({
      amount: "",
      description: "",
      date: "",
      category: "Food",
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
