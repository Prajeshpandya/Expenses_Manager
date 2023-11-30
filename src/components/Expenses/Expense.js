import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expense.css";

export default function Expense(props) {
  const [filteredyear, setFilteredyear] = useState("2021");

  const filterChangeHandler = (selectedyear) => {
    setFilteredyear(selectedyear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredyear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList  item={filteredExpenses}/>

        
        {/* {filteredExpenses.length === 0 && <p>No Expense Found !!</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((data) => (
            <Expenseitem
              key={data.id}
              title={data.title}
              amount={data.amount}
              date={data.date}
            />
          ))} */}

        {/* {filteredExpenses.length === 0 ? (
          <p>No Expense Found !!</p>
        ) : (
          filteredExpenses.map((data) => (
            <Expenseitem
              key={data.id}
              title={data.title}                      // you can use turnory method also 
              amount={data.amount}
              date={data.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
}
