import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  // const [filterInfoText, setFilterInfoText] = useState("2021 ,2023 and 2024");

  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    // if (selectedYear === 2021) {
    //   setFilterInfoText("2022 ,2023 and 2024");
    // } else if (selectedYear === 2022) {
    //   setFilterInfoText("2021 ,2023 and 2024");
    // } else if (selectedYear === 2023) {
    //   setFilterInfoText("2021 ,2022 and 2024");
    // } else if (selectedYear === 2022) {
    //   setFilterInfoText("2021 ,2023 and 2024");
    // } else {
    //   setFilterInfoText("2021,2022 & 2023");
    // }
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
