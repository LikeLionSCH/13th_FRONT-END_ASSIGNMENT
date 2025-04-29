'use client'
// 루트에 해당하는 페이지 라고함
import ChatWindow from "./Components/ChatWindow.jsx"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.inner}>
      <ChatWindow/>
    </div>
  )
}