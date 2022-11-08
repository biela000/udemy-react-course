import SimpleInput from "./SimpleInput";

import useInput from "../hooks/use-input";

const BasicForm = () => {
  const nameInput = useInput("text");
  const emailInput = useInput("email");

  const isFormValid = nameInput.isInputValid && emailInput.isInputValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      nameInput.resetInput();
      emailInput.resetInput();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <SimpleInput
        type="text"
        name="name"
        id="name-input"
        onChange={nameInput.inputChangeHandler}
        value={nameInput.input}
        onBlur={nameInput.inputBlurHandler}
        labelText="Your Name"
      />
      <SimpleInput
        type="email"
        name="email"
        id="email-input"
        onChange={emailInput.inputChangeHandler}
        value={emailInput.input}
        onBlur={emailInput.inputBlurHandler}
        labelText="Email"
      />
      {nameInput.isInputInvalid && <p>Name must not be empty!</p>}
      {emailInput.isInputInvalid && <p>Email must be valid!</p>}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
