import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState(""); // can be done like this or...
  const [enterDate, setEnterDate] = useState("");
  /* const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "", //on do this....
    enterDate: "",
  });*/

  // document.getElemnentById().addEventListener('click',(event)=>{}) ...hum js m input ese lete h yha direct function likh dete h

  const changeTitleHandler = (event) => {
    setEnterTitle(event.target.value);
    /* setUserInput({
      ...userInput, // making the rest vlues empty so that it can override
      enterTitle: event.target.value,
    });*/
  };
  const changeAmountHandler = (event) => {
    setEnterAmount(event.target.value);
    /* setUserInput({
      ...userInput, // making the rest vlues empty so that it can override
      enterAmount: event.target.value,
    });*/
  };
  const changeDateHandler = (event) => {
    setEnterDate(event.target.value);
    /* setUserInput({
      ...userInput, // making the rest vlues empty so that it can override
      enterDate: event.target.value,
    });*/
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpanseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enterDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add On
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
