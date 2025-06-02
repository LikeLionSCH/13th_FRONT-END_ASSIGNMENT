"use client"
import React from 'react';
import styles from "../page.module.css"

function ChatMessages({goMes}) {
  return (
    <div className={styles["chat-messages"]}>
      <div className={styles["timestamp"]}>오후 2:30</div>
{
  goMes.map((item)=>{
   return <div className={styles["message-container"] + " " + styles[item.type]}>
        {item.type === 'received'&&<div className={styles["profile-pic"]}></div>}
        <div className={styles["chat-bubble"]}>{item.contents}</div>
      </div>
  })
}

    </div>
  );
}

export default ChatMessages;
