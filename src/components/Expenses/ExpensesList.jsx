import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  let expenseContent = <p>No expense found</p>;
  if (props.items.length === 0) {
    return <h2 className="expense-List__fallback">found no expense</h2>;
  }
  return (
    <ul className="expense-List">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
