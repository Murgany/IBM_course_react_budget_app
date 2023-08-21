import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
    // retrieve dispatch and currency from App context
    // dispatch takes 2 args; type and payload 
    const { dispatch, currency } = useContext(AppContext);

    // delete expense
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    // Increase funds allocation
    const IncreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    // Dencrease funds allocation
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'REDUCE_EXPENSE',
            payload: expense
        })
    }

    return(
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button style={{width: '35px', height: '35px', borderRadius: '1000px', fontWeight: '500', fontSize: '20px', lineHeight: 1}} className='btn btn-success' onClick={event=> IncreaseAllocation(props.name)}>+</button></td>
            <td><button style={{width: '35px', height: '35px', borderRadius: '1000px', fontWeight: '500', fontSize: '20px', lineHeight: 1}} className='btn btn-danger' onClick={event=> decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete style={{width: '35px', height: '35px'}} size='' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem;
