import Profile from "./Profile.jsx"
import style from "./Message.module.css"
//   {from : "me" or "op", message : "안녕하세요"},
const Message = ({ message }) => {
  return (
    message.from == "me" ? 
    <div className={`${style.message} ${style.my}`}>
      <div className={style.content}>{message.message}</div>
    </div>
    : 
    <div className={`${style.message} ${style.op}`}>
      <Profile/>
      <div className={style.content}>{message.message}</div>
    </div>
  )
}
export default Message