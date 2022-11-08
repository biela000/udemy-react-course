import { useState } from "react";

const useInput = (validate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(value);
  const isInvalid = !isValid && isTouched;

  const changeHandler = (event) => {
    setIsTouched(true);
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setValue("");
  };

  return {
    value,
    isTouched,
    isValid,
    isInvalid,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
