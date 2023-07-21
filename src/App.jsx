import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

import Expenses from "./components/Expenses/Expenses.jsx";
import "./App.css";

const Dummy_Expense = [
  {
    id: "e1",
    title: "toilet paper",
    amount: 2000,
    date: new Date(2023, 6, 13),
  },
  {
    id: "e2",
    title: "party clothes",
    amount: 7000,
    date: new Date(2023, 5, 23),
  },
  {
    id: "e3",
    title: "stationary",
    amount: 200,
    date: new Date(2023, 8, 13),
  },
  {
    id: "e4",
    title: "milk",
    amount: 250,
    date: new Date(2023, 6, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />

        <Expenses items={expenses} />
      </div>
    </>
  );
};

export default App;
