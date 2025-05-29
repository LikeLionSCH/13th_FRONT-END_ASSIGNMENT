"use client"
import styles from "../page.module.css"
import React, { useState } from 'react';

function ChatInput({msgInput}) {
const [messageContents, setMessageContents] = useState('')

  function btnClick(){
    msgInput(pre => [...pre, {
      type : "sent",
      contents : messageContents
    }])
    setTimeout(()=>{
    msgInput(pre => [...pre, {
      type : "received",
      contents : "bye!"
    }])
    },1000)
}


  return (
    <div className={styles["chat-input"]}>
      <div className={styles["chat-input-icons"]}>
        <span className="material-icons">insert_emoticon</span>
        <span className="material-icons">photo_camera</span>
      </div>
      <input type="text" placeholder="메시지 보내기..." 
      onChange={event => setMessageContents(event.target.value)}
      />
      <button onClick={btnClick}>전송</button>
    </div>
  );
}

export default ChatInput;
