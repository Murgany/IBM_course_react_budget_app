import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return(
        <div className="alert alert-primary">Total Expense: {currency}{totalExpenses}</div>
    )
}

export default ExpenseTotal