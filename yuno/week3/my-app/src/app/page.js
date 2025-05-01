'use client'
// 루트에 해당하는 페이지 라고함
import { useState } from "react"
// import ChatWindow from "./Components/ChatWindow.jsx"
import ChatHeader from "./Components/ChatHeader"
import ChatBody from "./Components/ChatBody"
import ChatInput from "./Components/ChatInput"

import styles from "./page.module.css"

export default function Home() {
  const [chats, setChats] = useState([])

  return (
    <div className={styles.inner}>
      <ChatHeader/>
      <ChatBody messages = {chats}/>
      <ChatInput chats={chats} setChats = {setChats}/>
    </div>
  )
}