//입력창, 버튼, 이벤트 처리
import styles from './page.module.css';

export default function MessageInput({ inputValue, setInputValue, onSend }) {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") onSend();
    };
  
    return (
      <div className={styles.bottom}>
        <div className={styles.inputSendBtn}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="iMessage"
          />
          <img src="/send_button.png" onClick={onSend} alt="send" />
        </div>
      </div>
    );
  }

  