import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  // Access the app context and retrieve the expenses, budget, and currency values
  const { expenses, budget, currency } = useContext(AppContext);

  // Calculate the total expenses by summing up the cost of each expense
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  // Determine the alert type based on whether the total expenses exceed the budget
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    // Display the remaining budget with the currency symbol and appropriate alert type
    <div className={`alert ${alertType}`}>
      Remaining: {currency}
      {budget - totalExpenses}
    </div>
  );
};

export default Remaining;