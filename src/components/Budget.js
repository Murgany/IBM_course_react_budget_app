import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  // Retrieve budget, dispatch, expenses, currency from AppContext.
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  // Set the initial state.
  const [newBudget, setNewBudget] = useState(budget);
  
  // Change budget and set it as the new state.
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  // Chaging the allocated budget
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // Enter key on keyboard saves the entered budget.
      saveBudget();
    } else if (event.keyCode === 27) { // Escape key on keyboard cancels the budget change operation.
      cancelEdit();
    } else if (event.keyCode === 38 && event.target === document.activeElement) { // up arrow and input field is focused adds 10 to the budget.
      setNewBudget((prevBudget) => Math.min(parseInt(prevBudget) + 10, 20000));
    } else if (event.keyCode === 40 && event.target === document.activeElement) { // down arrow and input field is focused reduces 10 to the budget.
      setNewBudget((prevBudget) => Math.max(parseInt(prevBudget) - 10, 0));
    }
  };

  // Save the changes
  const saveBudget = () => {
    let exp = 0;
    // accumulater. Adds new funds to the existing budget.
    exp = expenses.reduce(
        (previousExp, currentExp) => {
            return previousExp + currentExp.cost
        },0
    );
  
    // Setting limits. The strings bellow are descriptive enough.
    if (newBudget < exp) {
      alert("You cannot reduce the budget value lower than the spending.");
      setNewBudget(budget)
    } else if (isNaN(newBudget) || newBudget < 1) {
      alert("Please enter a valid number. The minimum is 1.");
      setNewBudget(budget);
    } else if (newBudget > 20000) {
      alert("The value cannot exceed 20000.");
      setNewBudget(budget);
    } else {
      // if all the above conditions are met, set the new budget.
      dispatch({
        type: 'SET_BUDGET',
        payload: newBudget,
      });
    }
  };

  // cance new budget addition.
  const cancelEdit = () => {
    setNewBudget(budget);
  };

  return (
    <div className="alert alert-secondary p- d-flex align-items-center justify-content-between" style={{ height: '56px' }}>
      <span>Budget: {currency}</span>
      <input
        required
        type="number"
        max={20000}
        className="form-control mr- col"
        value={newBudget}
        onChange={handleBudgetChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Budget;
