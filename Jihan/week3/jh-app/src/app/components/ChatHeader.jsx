"use client"
import React from 'react';
import styles from "../page.module.css"

function ChatHeader() {
  return (
    <div className={styles["chat-header"]}>
      <div className={styles["header-left"]}>
        <div className={styles["profile-pic"]}></div>
        <div className={styles["header-text"]}>
          <strong>홍길동</strong>
          <span>dododog_dong</span>
        </div>
      </div>
      <div className={styles["header-icons"]}>
        <span className="material-icons">call</span>
        <span className="material-icons">videocam</span>
      </div>
    </div>
  );
}

export default ChatHeader;
