import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

export default function Header(props) {
  const { onShowCart } = props;

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </Fragment>
  );
}
