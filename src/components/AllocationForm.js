import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  // Access the app context and retrieve necessary values and dispatch function
  const { dispatch, remaining, currency } = useContext(AppContext);

  // State variables for capturing form input values
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  // Function to handle form submission
  const submitEvent = () => {
    if (cost > remaining) {
      // Display an alert if the cost exceeds the remaining funds
      alert("The value cannot exceed remaining funds $" + remaining);
      setCost("");
      return;
    }

    // Create an expense object with the form input values
    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === "Reduce") {
      // Dispatch the 'REDUCE_EXPENSE' action to reduce the expense
      dispatch({
        type: "REDUCE_EXPENSE",
        payload: expense,
      });
    } else {
      // Dispatch the 'ADD_EXPENSE' action to add the expense
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
      setCost("");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group my-3" style={{ marginLeft: "" }}>
          <div className="input-group-prepend">
            <label
              className="input-group-text me-2"
              htmlFor="inputGroupSelect01"
            >
              Department
            </label>
          </div>
          {/* Dropdown for selecting the department */}
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="Human Resource" name="Human Resource">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label
              className="input-group-text me-2"
              htmlFor="inputGroupSelect02"
            >
              Allocation
            </label>
          </div>
          {/* Dropdown for selecting the allocation action */}
          <select
            className="custom-select me-4"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <span>{currency}</span>

          {/* Input field for entering the cost */}
          <input
            required="required"
            type="number"
            id="cost"
            value={cost}
            style={{ marginLeft: "1rem", size: 10 }}
            onChange={(event) => setCost(event.target.value)}
          ></input>
          {/* Button to submit the form */}
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;