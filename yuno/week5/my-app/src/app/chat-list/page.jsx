// '/chat-list' 페이지
'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import style from "./ChatRoomListPage.module.css"
import Button from "../Components/Button/Button"
import FooterNav from "../Components/Footer/FooterNav"
import AddChatRoomModal from "../Components/ChatList/AddChatRoomModal"

const dummyRooms = [
  {
    id : "key1",
    name : "채팅방1",
    roomManager : "유저1"
  },
  {
    id : "key2",
    name : "채팅방2",
    roomManager : "유저2"
  },
  {
    id : "key3",
    name : "채팅방3",
    roomManager : "유저3"
  }
]

const ChatRoomListPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [rooms, setRooms] = useState([])
  const router = useRouter()
  
  const getChatRooms = async () => {
    try {
      const response = await fetch('http://home.iubns.net:8080/api/room', {
        credentials : "include"
      })
      const data = await response.json()
      setRooms(data) // [ {id : "key1", name : "채팅방1", roomManager : "유저1"}, {id : "key2", name : "채팅방2", roomManager : "유저2"}, {id : "key3", name : "채팅방3", roomManager : "유저3"}]
    }catch(err) {
      console.error(err)
      console.log('채팅목록 불러오기 실패');
      setRooms(dummyRooms)
      alert('채팅목록 불러오기 실패')
    }
  }

  /*
  const addNewChat = async () => {
    try {
      const response = await fetch('http://home.iubns.net:8080/api/room', {
        method : "POST",
        body : JSON.stringify({

        }),
        credentials : "include"
      })

    }catch(err) {
      console.error(err)      
      alert('새로운채팅방 생성 실패')
    }
  }
  */

  useEffect(() => {
    getChatRooms()
  }, [])

  const enterChatRoom = (roomName, roomId) => {
    router.push(`/chat-list/${encodeURIComponent(roomName)}?id=${roomId}`)
  }
  return (
    <>
      {isOpen ? <AddChatRoomModal setIsOpen={setIsOpen} getChatRooms = {getChatRooms}/> : null}
      <div className={style.header}>
        <h1>채팅</h1>
        <span className={`material-symbols-outlined ${style.addIcon}`} onClick={() => setIsOpen(prev => !prev)}>chat_add_on</span>
      </div>
      <ul>
        {rooms.map(room => {
          return (
            <li key={room.id} className={style.li} onClick={e => e.target == e.currentTarget ? enterChatRoom(room.name, room.id) : null}>
              <div className={style.info}>
                <div className={style["profile-img"]}></div>
                <span className={style["chat-name"]}>{room.name}</span>
              </div>
              <Button text={"삭제"} clickHandler={async () => {
                console.log(`${room.id} 채팅목록에서 삭제 요청`);
                try {
                  const response = await fetch(`http://home.iubns.net:8080/api/room/${room.id}`, {
                    method : "DELETE",
                    credentials : "include"
                  })
                  getChatRooms() // 삭제해서 "채팅목록" 에서 사라진거 반영하기위해서
                }catch(err) {
                  console.error(err)
                  console.log(`${room.id} 채팅삭제 실패!`);
                  alert(`${room.id} 채팅삭제 실패!`)
                }
              }}/>
            </li>            
          )
        })}
      </ul>
      <FooterNav/>
    </>    
  )
}
export default ChatRoomListPage