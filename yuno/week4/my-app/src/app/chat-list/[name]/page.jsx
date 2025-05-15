'use client'
import { useState } from "react"

import ChatHeader from "../../Components/ChatRoom/ChatHeader"
import ChatBody from "../../Components/ChatRoom/ChatBody"
import ChatInput from "../../Components/ChatRoom/ChatInput"
import { useParams } from "next/navigation"

const ChatRoom = () => {
  const params = useParams()
  const { name } = params
  const decName = decodeURIComponent(name); // "Evelyn Jung"
  const [chats, setChats] = useState([])

  return (
    <>
      <ChatHeader name = {decName}/>
      <ChatBody messages = {chats}/>
      <ChatInput chats={chats} setChats = {setChats}/>
    </>
  )
}
export default ChatRoom