import { useRouter } from "next/navigation"
import styles from "./ChatHeader.module.css"

const ChatHeader = ({ name }) => {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <div className = {styles.header}>
      <div className = {styles.arrow} onClick={goBack}>{'<'}</div>
      <div className={styles.profile}></div>
      <div className = {styles.info}>
        <span className = {styles["info-name"]}>{name}</span>
        <span className = {styles["info-intr"]}>teresa Lai_</span>
      </div>
      <div className = {styles["icon-phone"]}>
        <span className={`material-symbols-outlined ${styles.icon}`}>call</span>
      </div>
      <div className = {styles["icon-face-talk"]}>
        <span className={`material-symbols-outlined ${styles.icon}`}>videocam</span>
      </div>
    </div>
  )
}
export default ChatHeader