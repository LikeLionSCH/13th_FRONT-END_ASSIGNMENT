import Message from "./Message.jsx"
import styles from "./ChatBody.module.css"

const ChatBody = ({ messages }) => {
  return (
    <div className={styles["content-div"]}>
      <div className={styles.time}>8 : 49 AM</div>
      {messages.map((message, idx) => {
        return <Message message = {message} key={`${message.from}${idx}`}/>
      })}
    </div>
  )
}

export default ChatBody