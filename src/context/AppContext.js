import React, { createContext, useReducer } from 'react';

// The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let budget = 0;
    switch (action.type) {
        case 'ADD_EXPENSE':
            // Calculate the total budget
            let total_budget = 0;
            total_budget = state.expenses.reduce(
                (previousExp, currentExp) => {
                    return previousExp + currentExp.cost
                },0
            );

            total_budget = total_budget + action.payload.cost;
            action.type = "DONE";

            // Check if the total budget is within the allocated budget
            if(total_budget <= state.budget) {
                total_budget = 0;
                // Update the cost of the existing expense
                state.expenses.map((currentExp)=> {
                    if(currentExp.name === action.payload.name) {
                        currentExp.cost = action.payload.cost + currentExp.cost;
                    }
                    return currentExp
                });
                return {...state,};
            } else if (isNaN(action.payload.cost) || action.payload.cost < 1) {
                // Alert if the entered cost is not a valid number or less than 1
                alert("Please enter a valid number. The minimum is 1.");
                return {
                  ...state
                };
            } else {
                // Alert if the allocated budget is not enough to increase the expense
                alert("Cannot increase the allocation! funds are not enough!");
                return {
                    ...state
                }
            }
        case 'REDUCE_EXPENSE':
            // Reduce the cost of the expense and update the remaining budget
            const red_expenses = state.expenses.map((currentExp)=> {
                if (currentExp.name === action.payload.name && currentExp.cost - action.payload.cost >= 0) {
                    currentExp.cost =  currentExp.cost - action.payload.cost;
                    budget = state.budget + action.payload.cost
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                expenses: [...red_expenses],
            };
        case 'DELETE_EXPENSE':
            // Delete the expense and update the remaining budget
            action.type = "DONE";
            state.expenses.map((currentExp)=> {
                if (currentExp.name === action.payload) {
                    budget = state.budget + currentExp.cost
                    currentExp.cost =  0;
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                budget
            };
        case 'SET_BUDGET':
            // Set the budget to the payload value
            action.type = "DONE";
            state.budget = action.payload;
            return { ...state }
        case 'CHG_CURRENCY':
            // Change the currency to the payload value
            action.type = "DONE";
            state.currency = action.payload;
            return { ...state }
        default:
            return state;
    }
};

// Sets the initial state when the app loads: This can be requested from remote server / API
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

// Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;

    if (state.expenses) {
        // Calculate the remaining budget
        const totalExpenses = state.expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        remaining = state.budget - totalExpenses;
    }

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};