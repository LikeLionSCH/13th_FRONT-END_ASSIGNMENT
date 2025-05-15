'use client';

// React 상태 관리를 위한 useState 훅을 import
import { useState } from "react";

import "./globals.css";

// 기존에 작성했던 style.css의 파일 코드 사용
import styles from "./page.module.css";

// 채팅 메시지 컴포넌트 분리
import ChatMessages from "./ChatMessages";

// 채팅 상단 헤더 컴포넌트 (프로필 사진, 이름, 전화)
function ChatHeader() {
  return (
    <div className={styles["chat-header"]}>
      <div className={styles.profile}>
        
        <span>이승수</span>
      </div>
      <div className={styles.icons}>📞 🎥</div>
    </div>
  );
}

// 채팅 입력 및 전송 버튼 컴포넌트
function ChatInput({ onSend }) {
  const [inputValue, setInputValue] = useState('');

  // 전송 버튼 누르면 동작하는 함수
  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSend(inputValue);
      setInputValue('');
    }
  };

  // 키보드에서 Enter 키 누르면 동작하는 함수
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles["chat-input"]}>
      <input
        type="text"
        placeholder="메시지 입력..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>⬆️</button>
    </div>
  );
}

// 메인 컴포넌트
export default function Home() {
  const [messages, setMessages] = useState([]);

  // 메시지 전송 함수
  const handleSendMessage = (text) => {
    setMessages((prev) => [...prev, { text, type: "sent" }]);
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