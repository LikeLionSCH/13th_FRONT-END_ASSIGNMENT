import styles from './page.module.css';

export default function MessageContents({ messages, messagesEndRef }) {
    return (
      <div className={styles.chatMessages}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.side === "right"
                ? styles.messageRight
                : styles.messageLeft
            }
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    );
  }
  