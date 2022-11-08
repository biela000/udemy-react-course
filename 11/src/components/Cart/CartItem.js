import { useDispatch } from "react-redux";
import { cartArrayActions } from "../../store/cart-array-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, price } = props.item;
  const total = quantity * price;

  const addItemHandler = () => {
    dispatch(cartArrayActions.add({ id: props.item.id, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartArrayActions.remove({ id: props.item.id, price }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
