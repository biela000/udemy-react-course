import { useSelector, useDispatch } from "react-redux";

import { cartUIActions } from "../../store/cart-ui-slice";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(
    (state) => state.cartProducts.combinedQuantity
  );

  const clickHandler = () => {
    dispatch(cartUIActions.toggle());
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
