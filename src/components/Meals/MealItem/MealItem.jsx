import { useContext } from "react";

import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

export default function MealItem(props) {
  const { id, name, description, price } = props;
  const cartCtx = useContext(CartContext);

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
