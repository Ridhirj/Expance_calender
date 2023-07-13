import React from "react";
import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 20, 2023</div>
      <div className="expense-item__description">
        <h2>Car insurence</h2>
        <div className="expense-item__price">10,000Rs</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
