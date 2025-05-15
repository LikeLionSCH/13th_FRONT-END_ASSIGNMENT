'use client'
import { useRouter } from "next/navigation"
import FooterNav from "../Components/Footer/FooterNav"
import style from "./ChatListPage.module.css"

const chats = [
  { 
    name : "Evelyn Jung",
    last : "~~~"
  },
  {
    name : "Alice Kim",
    last : "^^^"
  },
  {
    name : "Henry Yoo",
    last : "&&&"
  },
  {
    name : "Jason Moon",
    last : "***"
  }
]

const ChatListPage = () => {
  const router = useRouter()

  const enterChatRoom = (chatName) => {
    router.push(`/chat-list/${chatName}`)
  }
  return (
    <>
      <h1>채팅</h1>
      <ul>
        {chats.map((chat, idx) => {
          return (
            <li key={`${chat.name}${idx}`} className={style.li} onClick={() => enterChatRoom(chat.name)}>
              <div className={style["profile-img"]}></div>
              <div className={style.info}>
                <span className={style["chat-name"]}>{chat.name}</span>
                <span className={style["recent-talk"]}>{chat.last}</span>
              </div>
            </li>            
          )
        })}
      </ul>
      <FooterNav/>
    </>    
  )
}
export default ChatListPage