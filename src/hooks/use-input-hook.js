import { useState } from "react";
const useInputHook = (validityCheck) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validityCheck(enteredValue);
  const hasError = !isValid && isTouched;

  const onChangeHandler = (e) => {
    setIsTouched(true);
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid,
    hasError,
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
    reset,
  };
};

export default useInputHook;
