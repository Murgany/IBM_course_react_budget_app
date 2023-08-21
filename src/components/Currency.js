import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {

  // retrieve currency and dispatch from AppContext
  const { currency, dispatch } = useContext(AppContext);

  // dispatch takes 2 arguments for setting the currency; type and value
  const handleCurrencyChange = (value) => {
    dispatch({ type: 'CHG_CURRENCY', payload: value });
  };

  return (
    <div className="row alert alert-info" style={{ height: '57px' }}>
      <div className="input-group">

        <div className="input-group-prepen">
          <label className="input-group-tex border-0 bg-transparent me-2" htmlFor="dropdown">
            Currency:
          </label>
        </div>

        {/* Dropdown to change currency */}
        <Dropdown style={{marginTop: '-5px'}}>
          <Dropdown.Toggle className='border-dark' variant="" id="dropdown-basic">
            {currency} 
          </Dropdown.Toggle>

          <Dropdown.Menu className='currency'>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('')}
              className="option" // Add custom class name
            >
              {currency} Pound
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('$')}
              className="option" // Add custom class name
            >
              $ USD
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('€')}
              className="option" // Add custom class name
            >
              € Euro
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('₹')}
              className="option" // Add custom class name
            >
              ₹ Ruppee
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Currency;