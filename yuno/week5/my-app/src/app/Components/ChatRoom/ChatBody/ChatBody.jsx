import { useEffect, useRef } from "react"
import Message from "../Message/Message.jsx"
import styles from "./ChatBody.module.css"

const ChatBody = ({ messages }) => {
  const chatContainerRef = useRef(null)
  useEffect(() => {
    const el = chatContainerRef.current
    if(el) el.scrollTop = el.scrollHeight; // 맨 아래로 스크롤
  }, [messages])
  // messages를 받아오고 난뒤 스크롤 맨아래로 내리게 해줌
  return (
    <div className={styles["content-div"]} ref={chatContainerRef}>
      <div className={styles.time}>8 : 49 AM</div>
      {messages.map((message, idx) => {
        return <Message message = {message} key={`${message.username}${idx}`}/>
      })}
    </div>
  )
}

export default ChatBody