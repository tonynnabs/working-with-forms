import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
    if(action.type === 'ON_CHANGE'){
        return {value: action.text, isTouched: state.isTouched };
    }
    if(action.type === 'ON_BLUR'){
        return {isTouched: true, value: state.value};
    }
    if(action.type === 'ON_RESET'){
        return {isTouched: false, value: ''};
    }
  return initialState;
};
const useInputHook = (validityCheck) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);
  const isValid = validityCheck(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const onChangeHandler = (e) => {
      dispatch({type: 'ON_CHANGE', text: e.target.value});
  };

  const onBlurHandler = () => {
    dispatch({type: 'ON_BLUR'});
  };
  const reset = () => {
    dispatch({type: 'ON_RESET'});
  };
  return {
    value: inputState.value,
    isValid,
    hasError,
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
    reset,
  };
};

export default useInputHook;
