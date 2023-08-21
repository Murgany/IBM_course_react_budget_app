import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  // Access the app context and retrieve the expenses and currency values
  const { expenses, currency } = useContext(AppContext);

  // Calculate the total expenses by summing up the cost of each expense
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    // Display the total expenses with the currency symbol
    <div className="alert alert-primary">
      Total Expense: {currency}
      {totalExpenses}
    </div>
  );
};

export default ExpenseTotal;