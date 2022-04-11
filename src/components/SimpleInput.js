import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameRef = useRef();
  //--- Using on Change---------
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  //----Using Refs for on Submit-----------
  // const formSubmitHandler = (e) => {
  //   e.preventDefault();
  //   setEnteredName( nameRef.current.value);
  // };

  //----Using on Submit-----------
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    console.log(enteredName);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  const formClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name {enteredName}</label>
        <input
          ref={nameRef}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
