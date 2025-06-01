import { useRouter } from "next/navigation"
import { useState } from "react"
import styles from "./ChatHeader.module.css"
import AddFriendToRoomModal from "../../AddFriendToRoomModal/AddFriendToRoomModal"

const ChatHeader = ({ name, num, roomId, getUsers }) => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <>
      {isOpen ? <AddFriendToRoomModal setIsOpen={setIsOpen} roomId = {roomId} getUsers = {getUsers}/>: null}
      <div className = {styles.header}>
        <div className = {styles.arrow} onClick={goBack}>{'<'}</div>
        <span className={`material-symbols-outlined ${styles.addIcon}`} onClick={() => setIsOpen(prev => !prev)}>person_add</span>
        <div className={styles.profile}></div>
        <div className = {styles.info}>
          <span className = {styles["info-name"]}>{name}</span>
          <span className = {styles["info-intr"]}>{num}명 참여중</span>
        </div>
      </div>
    </>
  )
}
export default ChatHeader