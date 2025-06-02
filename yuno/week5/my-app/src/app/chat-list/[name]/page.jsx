// 'chat-list/:nickName' 페이지
'use client'
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"

import ChatHeader from "../../Components/ChatRoom/ChatHeader/ChatHeader"
import ChatBody from "../../Components/ChatRoom/ChatBody/ChatBody"
import ChatInput from "../../Components/ChatRoom/ChatInput/ChatInput"

const dummyUsers = [
  {
    username : "멤버1",
  },
  {
    username : "멤버2",
  },
  {
    username : "멤버3",
  },
]

const dummyChats = [
  {
    username : "나",
    content : "ㅇㅋ 내일봐",
    createTime : "10:00"
  },
  {
    username : "유저1",
    content : "ㅂㅂ",
    createTime : "9:55"
  },
  {
    username : "나",
    content : "확인",
    createTime : "8:00"
  },
  {
    username : "유저1",
    content : "강남역 ㄱ",
    createTime : "7:55"
  },
  {
    username : "나",
    content : "어디서 만나?",
    createTime : "7:50"
  },
  {
    username : "유저1",
    content : "내일 점심 ㄱ",
    createTime : "7:45"
  },
  {
    username : "나",
    content : "언제만나?",
    createTime : "7:00"
  },
  {
    username : "유저1",
    content : "싫어",
    createTime : "6:55"
  },
  {
    username : "나",
    content : "봐봐",
    createTime : "6:50"
  },
  {
    username : "유저1",
    content : "ㄴㄴ",
    createTime : "6:45"
  },
  {
    username : "나",
    content : "이거봤어?",
    createTime : "6:40"
  }
]

const ChatRoom = () => {
  const params = useParams()
  const decName = decodeURIComponent(params.name); // "Evelyn Jung"

  const searchParams = useSearchParams()
  const roomId = searchParams.get("id")

  console.log(roomId);
  const [users, setUsers] = useState([])
  const [chats, setChats] = useState([])

  const getUsers = async () => {
    try {
      const response = await fetch(`http://home.iubns.net:8080/api/room/${roomId}`, {
        credentials : "include"
      })
      const data = await response.json()
      setUsers(data)
    }catch(err) {
      console.error(err)
      setUsers(dummyUsers)
      alert('채팅방 인원 불러오기 실패!')
    }
  }

  const getChats = async () => {
    try {
      const response = await fetch(`http://home.iubns.net:8080/api/chat/${roomId}`, {
        credentials : "include"
      })
      const data = await response.json()
      setChats([...data].reverse())
    }catch(err){
      console.error(err)
      setChats([...dummyChats].reverse())
    }
  }

  useEffect(() => {

    getUsers()
    getChats()

  }, [])

  return (
    <>
      <ChatHeader name = {decName} num = {users.length} roomId = {roomId} getUsers={getUsers}/>
      <ChatBody messages = {chats}/>
      <ChatInput roomId = {roomId} getChats = {getChats}/>
    </>
  )
}
export default ChatRoom