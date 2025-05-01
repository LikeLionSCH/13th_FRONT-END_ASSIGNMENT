import React from 'react';
import styles from './ChatBubble.module.css';

const ChatBubble = ({ sender, text }) => {
  const isMine = sender === '나';
  return (
    <div className={`${styles.messageContainer} ${isMine ? styles.sentContainer : styles.receivedContainer}`}>
      <div className={styles.name}>{sender}</div>
      <div className={`${styles.message} ${isMine ? styles.sent : styles.received}`}>{text}</div>
    </div>
  );
};

export default ChatBubble;
