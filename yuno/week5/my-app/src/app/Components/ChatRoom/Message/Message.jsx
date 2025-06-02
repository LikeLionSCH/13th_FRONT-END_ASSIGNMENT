import style from "./Message.module.css"
//   {from : "me" or "op", message : "안녕하세요"},
const Message = ({ message }) => {
  const { username, content, createTime } = message
  return (
    username == "나" ? 
    <div className={`${style.message} ${style.my}`}>
      {/* <span className={style.username}>나</span> */}
      <div className={style.content}>
        {content}
        <span className={style.time}>{createTime}</span>
      </div>
    </div>
    : 
    <div className={`${style.message} ${style.op}`}>
      <div className={style.profile}>
        <span className={style.username}>{username}</span>
      </div>
      <div className={style.content}>
        {content}
        <span className={style.time}>{createTime}</span>
      </div>
    </div>
  )
}
export default Message