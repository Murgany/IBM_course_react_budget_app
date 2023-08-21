import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencySelector from './components/Currency';
import "./App.css";

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container '>
                <h1 className='mt-3'>Company's Budget Allocation</h1>

                    <div className='row mt-3'>
                    {/* Add Budget component */}
                    <div className='col-sm'><Budget /></div>        

                    {/* Add Remaining component */}    
                    <div className='col-sm'><Remaining /></div>   

                    {/* Add ExpenseTotal component */}        
                    <div className='col-sm'><ExpenseTotal /></div> 

                    <div className='col-sm'><CurrencySelector /></div> 
                       
                    {/* Add ExpenseList component */}         
                    <div className='row m-auto'><ExpenseList /></div> 

                    {/* Add ExpenseItem component */}        

                    {/* Add AllocationForm component */}        
                    <div className='row m-auto'><AllocationForm /></div> 

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
