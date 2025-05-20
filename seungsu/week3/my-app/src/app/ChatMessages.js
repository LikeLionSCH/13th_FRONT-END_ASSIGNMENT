'use client';

import React from "react";
import styles from "./page.module.css";

export default function ChatMessages({ messages }) {
  return (
    <div className={styles["chat-messages"]}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${styles.message} ${styles[msg.type]}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}