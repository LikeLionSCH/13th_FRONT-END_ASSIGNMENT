import { useState } from "react"
import style from "../FriendsList/AddFriendModal/AddFriendModal.module.css" //스타일 그대로 사용
import Button from "../Button/Button"
const AddFriendToRoomModal = ({ setIsOpen, roomId, getUsers }) => {
  const [name, setName] = useState("")

  const changeHandler = e => setName(e.target.value)

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const response = await fetch(`http://home.iubns.net:8080/api/room?id=${roomId}&list=${name}`, {
        method : "PUT",
        credentials : "include",
      })
    } catch(err) {
      console.error(err)
      console.log(`${roomId} 로 ${name} 새멤버추가 실패`);
      alert(`${roomId} 로 ${name} 새멤버추가 실패`)
    }
    setIsOpen(prev => !prev)
    getUsers()
  }

  return(
    <div className={style.window} onClick={e => {
      if(e.target == e.currentTarget)setIsOpen(prev => !prev)
    }}>
      <form className={style.modal} onSubmit={submitHandler}>
        <input type="text" placeholder="추가할 친구" onChange={changeHandler} value={name}/>
        <Button text={"친구 초대"}/>
      </form>
    </div>
  )
}

export default AddFriendToRoomModal
