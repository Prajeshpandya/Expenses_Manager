import React from "react";
import "./ExpensesList.css";
import Expenseitem from "./ExpenseItem";
export default function ExpensesList(props) {
  let expensesContent = <p>No Expense Found !!</p>;

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((data) => (
        <Expenseitem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
    </ul>
  );
}
