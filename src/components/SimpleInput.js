import React from "react";
import useInput from "./../hooks/use-input";

const SimpleInput = (props) => {
  const validateNameInput = (value) => {return value.trim() !== ""}
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    onChange: nameInputChangeHandler,
    onBlur: inputOnBlurHandler,
    reset: resetNameInput,
  } = useInput(validateNameInput);
  
  //-------- Overall form validity, can also use useEffects------
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  //----Using on Submit-----------
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
  };

  const formClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name {enteredName}</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={inputOnBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
