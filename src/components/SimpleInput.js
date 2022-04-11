import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameRef = useRef();
  //--- Using on Change---------
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  //----Using Refs for on Submit-----------
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredName( nameRef.current.value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name {enteredName}</label>
        <input
          ref={nameRef}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
