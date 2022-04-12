import useInputHook from "./../hooks/use-input-hook";
const BasicForm = (props) => {
  //--First Name Input
  const validateFirstName = (value) => {
    return value.trim() !== "";
  };
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputInvalid,
    onChange: firstNameChangeHandler,
    onBlur: firstNameOnBlurHandler,
    reset: resetFirstName
  } = useInputHook(validateFirstName);

  //--Last Name Input
  const validateLastName = (value) => {
    return value.trim() !== "";
  };
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputInvalid,
    onChange: lastNameChangeHandler,
    onBlur: lastNameOnBlurHandler,
    reset: resetLastName
  } = useInputHook(validateLastName);

  //--Email Input
  const validateEmail = (value) => {
    return value.includes("@");
  };
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputInvalid,
    onChange: emailChangeHandler,
    onBlur: emailOnBlurHandler,
    reset: resetEmail
  } = useInputHook(validateEmail);

  let formIsValid;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(!formIsValid) {
      return;
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetEmail();
    resetFirstName();
    resetLastName();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameInputInvalid && "invalid"}`}>
          <label htmlFor="name">First Name {enteredFirstName}</label>
          <input
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameOnBlurHandler}
            type="text"
            id="name"
          />
          {firstNameInputInvalid && (
            <p className="error-text">First Name Should not be empty</p>
          )}
        </div>
        <div className={`form-control ${lastNameInputInvalid && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameOnBlurHandler}
            type="text"
            id="name"
          />
          {lastNameInputInvalid && (
            <p className="error-text">Last Name Should not be empty</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailInputInvalid && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
          type="text"
          id="name"
        />
        {emailInputInvalid && (
          <p className="error-text">Email Address must be valid (@)</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
