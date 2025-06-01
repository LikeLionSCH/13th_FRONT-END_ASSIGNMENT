import { useState } from "react"
import style from "../FriendsList/AddFriendModal/AddFriendModal.module.css" //스타일 그대로 사용
import Button from "../Button/Button"
const AddChatRoomModal = ({ setIsOpen, getChatRooms }) => {
  const [name, setName] = useState("")

  const changeHandler = e => setName(e.target.value)

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const response = await fetch(`http://home.iubns.net:8080/api/room`, {
        method : "POST",
        credentials : "include",
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify({
          name
        })
      })
    } catch(err) {
      console.error(err)
      console.log(`${name} 채팅방 생성ㄴ 실패`);
      alert(`${name} 채팅방 생성ㄴ 실패`)
    }
    setIsOpen(prev => !prev)
    getChatRooms()
  }

  return(
    <div className={style.window} onClick={e => {
      if(e.target == e.currentTarget)setIsOpen(prev => !prev)
    }}>
      <form className={style.modal} onSubmit={submitHandler}>
        <input type="text" placeholder="채팅방 이름" onChange={changeHandler} value={name}/>
        <Button text={"채팅 생성"}/>
      </form>
    </div>
  )
}

export default AddChatRoomModal