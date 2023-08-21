import React, {useContext} from "react";
import { AppContext } from '../context/AppContext';


const Remaining = () => {
//   const {remaining} = useContext(AppContext)
  const { expenses, budget, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0);

   const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>Remaining: {currency}{ budget - totalExpenses }</div>
  );

};

export default Remaining