import { useState } from "react";

const useInput = (type) => {
  const [input, setInput] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  let isInputValid;

  if (type === "text") {
    isInputValid = input.trim().length > 0;
  } else if (type === "email") {
    isInputValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsInputTouched(true);
  };

  const resetInput = () => {
    setInput("");
    setIsInputTouched(false);
  };

  const isInputInvalid = !isInputValid && isInputTouched;

  return {
    input,
    inputChangeHandler,
    inputBlurHandler,
    isInputValid,
    isInputInvalid,
    resetInput,
  };
};

export default useInput;
