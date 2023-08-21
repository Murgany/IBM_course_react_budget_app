// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

// const Currency = () => {
//     const { currency, dispatch } = useContext(AppContext);

//   const handleCurrencyChange = (event) => {
//     dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
// }
    
//     return (
//         // <div className="row alert alert-info" style={{ height: '57px' }}>

//         // <div className="input-group my-" >
            
//         //   <div className="input-group-prepend ">
//         //      <label className="input-group-tex me-2" htmlFor="inputGroupSelect01">Currency:</label>
//         //   </div>

//         //   <select className="currency form-select bg- h-" 
//         //   id="inputGroupSelect01" 
//         //   style={{lineHeight: 1}}
//         //   onChange={handleCurrencyChange}
//         //   >
//         //     <option className="option" defaultValue>{currency} Pound</option>
//         //     <option  className="option" value="$" name="$ ">$ USD</option>
//         //     <option className="option" value="€" name="€">€ Euro</option>
//         //     <option className="option" value="₹" name="₹">₹ Ruppee</option>
//         //   </select>
//         // </div>
//         // </div>

//         <div className="row alert alert-info" style={{ height: '57px' }}>
//         <div className="input-group my-">
//           <div className="input-group-prepend">
//             <label className="input-group-tex me-2" htmlFor="inputGroupSelect01">
//               Currency:
//             </label>
//           </div>
  
//           <select
//             className="currency"
//             id="inputGroupSelect01"
//             onChange={handleCurrencyChange}
//           >
//             <option value="" defaultValue>
//               {currency} Pound
//             </option>
//             <option value="$">$ USD</option>
//             <option value="€">€ Euro</option>
//             <option value="₹">₹ Ruppee</option>
//           </select>
//         </div>
//       </div>
//     );
// }

// export default Currency;
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (value) => {
    dispatch({ type: 'CHG_CURRENCY', payload: value });
  };

  // Custom styles for Dropdown.Items
  const customItemStyle = {
    background: 'lightgray',
    color: 'black',
    fontWeight: 'bold',
  };

  // Custom styles for Dropdown.Items on hover
  const customItemHoverStyle = {
    background: 'aquq',
    color: 'white',
  };

  return (
    <div className="row alert alert-info" style={{ height: '57px' }}>
      <div className="input-group">

        <div className="input-group-prepen">
          <label className="input-group-tex border-0 bg-transparent me-2" htmlFor="dropdown">
            Currency:
          </label>
        </div>

        <Dropdown className='' style={{marginTop: '-5px'}}>
          <Dropdown.Toggle className='border-dark' variant="" id="dropdown-basic">
            {currency} 
          </Dropdown.Toggle>

          <Dropdown.Menu className='currency'>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('')}
              // style={customItemStyle}
              className="option" // Add custom class name
            >
              {currency} Pound
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('$')}
              // style={customItemStyle}
              className="option" // Add custom class name
            >
              $ USD
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('€')}
              // style={customItemStyle}
              className="option" // Add custom class name
            >
              € Euro
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCurrencyChange('₹')}
              // style={customItemStyle}
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