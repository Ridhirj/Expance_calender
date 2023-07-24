import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpanseDateHanler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //setIsEditing(false);
  };
  const editingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}> Add new expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpanseData={SaveExpanseDateHanler}
          onCanceler={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
