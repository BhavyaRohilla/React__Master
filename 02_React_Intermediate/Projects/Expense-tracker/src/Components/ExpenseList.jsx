import Expense from "./Expense";

const ExpenseList = ({ expenseList }) => {
  if (!expenseList || expenseList.length === 0) {
    return <p>No expenses to display.</p>;
  }

  return (
    <div>
      <ul>
        {expenseList.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
