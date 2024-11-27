import Header from "./Components/Header";
import ExpenseForm from "./Components/ExpenseForm";
import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expenseList, setExpenseList] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenseList((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <>
      <Header />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenseList={expenseList} />
    </>
  );
}

export default App;
