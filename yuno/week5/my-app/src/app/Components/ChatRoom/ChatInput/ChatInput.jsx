import styles from "./ChatInput.module.css"
import { useState } from "react"

const ChatInput = ({ roomId, getChats }) => {
  const [text, setText] = useState("")

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sendMessage()
  }

  const sendMessage = async () => {
    try {
      const response = await fetch('http://home.iubns.net:8080/api/chat', {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          roomId,
          content : text
        })
      })
      // setText("")
      getChats()
    }catch(err){
      console.error(err)
      // setText("")
      getChats()
    }finally{
      setText("")
    }

    // const newMessage = {
    //   from : "me",
    //   message : text
    // }
    // setText("")
    // setChats(prev => [...prev, newMessage])
    // replyMessage()
  }

  // const replyMessage = async () => {
  //   const sleep = () => {
  //     return new Promise((res, rej) => {
  //       setTimeout(() => {
  //         res()
  //       }, 1000)
  //     })
  //   }
  //   await sleep()
  //   setChats(prev => [...prev, {
  //     from : "op",
  //     message : `${getRandomReply()}`
  //   }])
  // }

  // const getRandomReply = () => {
  //   const replies = [
  //     "음...",
  //     "좋아요",
  //     "싫어요",
  //     "별로에요",
  //     "감사합니다"
  //   ]
  //   return replies[Math.floor(Math.random() * replies.length)]
  // }

  return (
    <form className={styles["input-div"]} onSubmit={submitHandler}>
        <input name = "" className={styles["text-input"]} placeholder="enter your text" value={text} onChange={onChangeHandler}></input>
        <button className={styles.button}>Done</button>
    </form>
  )
}
export default ChatInput