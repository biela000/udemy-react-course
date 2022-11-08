import { useDispatch } from "react-redux";
import { cartArrayActions } from "../../store/cart-array-slice";

import Card from "../UI/Card";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description } = props.item;

  const addItemHandler = () => {
    dispatch(
      cartArrayActions.add({
        id: props.item.id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
