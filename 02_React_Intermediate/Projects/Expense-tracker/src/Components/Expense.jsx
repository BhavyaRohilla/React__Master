const Expense = ({ expense }) => {
  return (
    <li className="expense-item">
      <div className="expense-amount">
        <strong>Amount: ${expense.amount}</strong>
      </div>
      <p className="expense-description">
        <strong>Description:</strong> {expense.description}
      </p>
      <p className="expense-category">
        <strong>Category:</strong> {expense.category}
      </p>
      <p className="expense-date">
        <em>Date: {expense.date}</em>
      </p>
    </li>
  );
};

export default Expense;
