'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "../../page.module.css";
import ChatMessages from "../../ChatMessages";

// 채팅창 상단에 표시되는 친구 이름
function ChatHeader() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "알 수 없음"; // 쿼리에서 추출 실패 시 "알 수 없음"으로 설정

  return (
    <div className={styles["chat-header"]}>
      <div className={styles.profile}>
        <span>{name}</span> {/* 친구 이름 표시 */}
      </div>
      <div className={styles.icons}>📞 🎥</div>
    </div>
  );
}

// 메시지 입력 창 및 전송 버튼 컴포넌트
function ChatInput({ onSend }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSend(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles["chat-input"]}>
      <input
        type="text"
        placeholder="메시지 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>⬆️</button>
    </div>
  );
}

// 전체 채팅 컴포넌트
export default function ChatRoom() {
  const [messages, setMessages] = useState([]);

  // 메시지 전송 처리 함수
  const handleSendMessage = (text) => {
    setMessages((prev) => [...prev, { text, type: "sent" }]);
    // 1초 후 "만나서 반갑습니다~!" 메시지 출력
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "만나서 반갑습니다~!", type: "received" }]);
    }, 1000);
  };

  return (
    <div className={styles["chat-container"]}>
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}