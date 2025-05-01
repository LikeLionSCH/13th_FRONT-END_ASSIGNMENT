import styles from "./ChatHeader.module.css"

const ChatHeader = () => {
  return (
    <div className = {styles.header}>
      <div className = {styles.arrow}>{'<'}</div>
      <div className={styles.profile}></div>
      <div className = {styles.info}>
        <span className = {styles["info-name"]}>Teresa Lai</span>
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