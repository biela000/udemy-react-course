import { useContext } from "react";

import Button from "../../UI/Button/Button";

import OrderedContext from "../../contexts/ordered-context";

import styles from "./UserDataForm.module.css";

import useInput from "../../../hooks/use-input";
import useHttp from "../../../hooks/use-http";

const UserDataForm = (props) => {
  const cartCtx = useContext(OrderedContext);

  const {
    isLoading,
    error,
    applyRequest: sendOrder,
  } = useHttp(
    "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
  );

  const validateText = (text) => {
    if (text.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const inputs = {
    name: useInput(validateText),
    street: useInput(validateText),
    postalCode: useInput(validateText),
    city: useInput(validateText),
  };

  const isFormValid =
    inputs.name.isValid &&
    inputs.street.isValid &&
    inputs.postalCode.isValid &&
    inputs.city.isValid;

  const submitHandler = (event) => {
    event.preventDefault();

    sendOrder({
      method: "POST",
      body: {
        name: inputs.name.value,
        street: inputs.street.value,
        postalCode: inputs.postalCode.value,
        city: inputs.city.value,
        order: cartCtx.cartDishList,
      },
    });

    cartCtx.clearCart();

    inputs.name.reset();
    inputs.street.reset();
    inputs.postalCode.reset();
    inputs.city.reset();

    props.closeModal();
  };

  return (
    <form className={styles["user-data-form"]} onSubmit={submitHandler}>
      <div className={styles["user-data-form--inputs"]}>
        <label htmlFor="name-input">Your Name</label>
        <input
          type="text"
          name="name"
          id="name-input"
          className={inputs.name.isInvalid ? styles.invalid : ""}
          value={inputs.name.value}
          onChange={inputs.name.changeHandler}
          onBlur={inputs.name.blurHandler}
          placeholder={
            inputs.name.isInvalid ? "This field must not be empty" : ""
          }
        />
        <label htmlFor="street-input">Street</label>
        <input
          type="text"
          name="street"
          id="street-input"
          className={inputs.street.isInvalid ? styles.invalid : ""}
          value={inputs.street.value}
          onChange={inputs.street.changeHandler}
          onBlur={inputs.street.blurHandler}
          placeholder={
            inputs.street.isInvalid ? "This field must not be empty" : ""
          }
        />
        <label htmlFor="postal-code-input">Postal Code</label>
        <input
          type="text"
          name="postal-code"
          id="postal-code-input"
          className={inputs.postalCode.isInvalid ? styles.invalid : ""}
          value={inputs.postalCode.value}
          onChange={inputs.postalCode.changeHandler}
          onBlur={inputs.postalCode.blurHandler}
          placeholder={
            inputs.postalCode.isInvalid ? "This field must not be empty" : ""
          }
        />
        <label htmlFor="city-input">City</label>
        <input
          type="text"
          name="city"
          id="city-input"
          className={inputs.city.isInvalid ? styles.invalid : ""}
          value={inputs.city.value}
          onChange={inputs.city.changeHandler}
          onBlur={inputs.city.blurHandler}
          placeholder={
            inputs.city.isInvalid ? "This field must not be empty" : ""
          }
        />
      </div>
      <Button
        className={styles.submit}
        type="submit"
        disabled={!isFormValid || cartCtx.summaryAmount === 0}
      >
        Order
      </Button>
      {isLoading && !error && (
        <h3 className={styles.notification}>Sending data...</h3>
      )}
      {error && <h3 className={styles.notification}>{error}</h3>}
    </form>
  );
};

export default UserDataForm;
