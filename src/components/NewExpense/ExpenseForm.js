import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
  title: enterdTitle,
  amount: +enterdAmount,
  date: new Date(enterdDate),
};
    

    props.onsaveExpenseData(expenseData)

    setEnterdTitle("");
    setEnterdDate("");
    setEnterdAmount("");
  };

  // you can use this method to update the state instead of top .
  // const [userInput, SetInput] = useState({
  //   enterdTitle: "",
  //   enterdAmount: "",
  //   enterdDate: "",
  // });

  // const titleChangeHandler = (event) => {
  // SetInput({
  //   ...userInput,                          //when you use this method you depended on previous state value. newstate just update that value
  //   enterdTitle: event.target.value,
  // });

  //when the state dependend on each other best prectise to use below code for set the  value of newState

  //   SetInput((prevState)=>{              //this will give the most previous/LETEST state
  //     return {...prevState, enterdTitle:event.target.value}
  //   })
  // };

  // const amountChangeHandler = (event) => {
  //   SetInput({
  //     ...userInput,
  //     enterdAmount: event.target.value,
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   SetInput({
  //     ...userInput,
  //     enterdDate: event.target.value,
  //   });
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            value={enterdDate}
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="submit" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
}