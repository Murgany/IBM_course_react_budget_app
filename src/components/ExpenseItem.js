import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

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
