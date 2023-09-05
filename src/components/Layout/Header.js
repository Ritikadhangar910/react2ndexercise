import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactsMeals</h1>
        <HeaderCartButton onClick={props.onIconClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="delicious food" onClick={props.onIconClick} />
      </div>
    </>
  );
};
export default Header;
