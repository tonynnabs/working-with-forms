import React, {useState} from 'react';

//To make the input hook more dynamic, we add the validity fn
//as a parameter, so we can set the validity function dynamically from
//the component using the hook

const useInput = (validityFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validityFn(enteredValue);
  const hasError = !valueIsValid && isTouched;


  //--- Using on Change---------
  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  //----on Blur-----
  const inputOnBlurHandler = () => {
    setIsTouched(true);
  }

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  }

return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    onChange: inputChangeHandler,
    onBlur: inputOnBlurHandler,
    reset: resetInput
}
};

export default useInput;
