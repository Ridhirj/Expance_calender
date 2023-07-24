import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  // const [filterInfoText, setFilterInfoText] = useState("2021 ,2023 and 2024");

  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
