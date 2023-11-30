import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    }; //for ExpenseForm

    props.onAddExpense(expenseData); //from app.js
  };
  
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing === true ? (
        <ExpenseForm onsaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>
      ) : (
        <button onClick={startEditingHandler}>Add Expenses</button>
      )}
    </div>
  );
}
