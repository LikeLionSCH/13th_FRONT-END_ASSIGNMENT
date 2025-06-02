import style from "./Button.module.css"
const Button = ({ text, clickHandler }) => {
  return <button className={style.btn} onClick={clickHandler}>{text}</button>
}

export default Button