import SimpleInput from "./SimpleInput";
import useAnotherInput from "../hooks/use-another-input";

const AnotherForm = () => {
  const inputs = {
    firstName: useAnotherInput("text"),
    lastName: useAnotherInput("text"),
    emailAddress: useAnotherInput("email"),
  };

  const submitHandler = (event) => {
    event.preventDefault();
    inputs.firstName.reset();
    inputs.lastName.reset();
    inputs.emailAddress.reset();
  };

  const isFormValid =
    inputs.firstName.isValid &&
    inputs.lastName.isValid &&
    inputs.emailAddress.isValid;

  return (
    <form onSubmit={submitHandler}>
      <div>
        <SimpleInput
          type="text"
          id="first-name-input"
          name="firstName"
          labelText="First Name"
          value={inputs.firstName.value}
          onChange={inputs.firstName.changeHandler}
          onBlur={inputs.firstName.blurHandler}
        />
        {inputs.firstName.isInvalid && <h1>First Name must not be empty</h1>}
        <SimpleInput
          type="text"
          id="last-name-input"
          name="lastName"
          labelText="Last Name"
          value={inputs.lastName.value}
          onChange={inputs.lastName.changeHandler}
          onBlur={inputs.lastName.blurHandler}
        />
        {inputs.lastName.isInvalid && <h1>Last Name must not be empty</h1>}
      </div>
      <SimpleInput
        type="email"
        id="email-input"
        name="emailAddress"
        labelText="E-Mail Address"
        value={inputs.emailAddress.value}
        onChange={inputs.emailAddress.changeHandler}
        onBlur={inputs.emailAddress.blurHandler}
      />
      {inputs.emailAddress.isInvalid && <h1>E-Mail Address must be valid</h1>}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default AnotherForm;
