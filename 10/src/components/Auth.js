import { useDispatch } from "react-redux";

import useInput from "../hooks/use-input";

import classes from "./Auth.module.css";

import { authenticationActions } from "../store/index";

const Auth = () => {
  const emailValidation = (input) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(input);
  };

  const passwordValidation = (input) => {
    return input.length > 6;
  };

  const [emailInput, passwordInput] = [
    useInput(emailValidation),
    useInput(passwordValidation),
  ];
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    emailInput.reset();
    passwordInput.reset();
    dispatch(authenticationActions.login());
  };

  const isFormValid = emailInput.isValid && passwordInput.isValid;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailInput.value}
              onChange={emailInput.changeHandler}
              onBlur={emailInput.blurHandler}
              className={
                emailInput.isInvalid
                  ? classes.invalid
                  : emailInput.isValid
                  ? classes.valid
                  : ""
              }
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordInput.value}
              onChange={passwordInput.changeHandler}
              onBlur={passwordInput.blurHandler}
              className={
                passwordInput.isInvalid
                  ? classes.invalid
                  : passwordInput.isValid
                  ? classes.valid
                  : ""
              }
            />
          </div>
          <button type="submit" disabled={!isFormValid}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
