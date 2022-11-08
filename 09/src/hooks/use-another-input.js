import { useState, useReducer } from "react";

const useAnotherInput = (type) => {
  const setFormStates = (prevFormStates, action) => {
    if (action.name === "VALUE_CHANGE") {
      return {
        isTouched: true,
        value: action.value,
      };
    } else if (action.name === "TOUCH") {
      return {
        ...prevFormStates,
        isTouched: true,
      };
    } else if (action.name === "RESET") {
      return {
        value: "",
        isTouched: false,
      };
    }
  };

  const [formStates, dispatchFormStates] = useReducer(setFormStates, {
    value: "",
    isTouched: false,
  });

  let isValid;

  if (type === "text") {
    isValid = !(formStates.value.trim().length === 0);
  } else if (type === "email") {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    isValid = emailRegex.test(formStates.value);
  }

  const isInvalid = !isValid && formStates.isTouched;

  const changeHandler = (event) => {
    dispatchFormStates({ name: "VALUE_CHANGE", value: event.target.value });
  };

  const blurHandler = () => {
    dispatchFormStates({ name: "TOUCH" });
  };

  const reset = () => {
    dispatchFormStates({ name: "RESET" });
  };

  return {
    value: formStates.value,
    changeHandler,
    blurHandler,
    isValid,
    isInvalid,
    reset,
  };
};

export default useAnotherInput;
