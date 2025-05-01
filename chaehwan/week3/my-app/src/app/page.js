'use client';

import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './components/ChatBubble';
import styles from './page.module.css';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: '나', text: '형 나 커피사줘' },
    { sender: '조아람', text: '꺼졍' },
    { sender: '나', text: '사줭' },
    { sender: '조아람', text: '안되긴해...' },
    { sender: '나', text: '저 배고파여' },
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: '나', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: '조아람', text: 'ㅇㅋ여' }]);
    }, 1000);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.bg}>
      <div className={styles.chatContainer}>
        <div className={styles.chatBox} ref={chatRef}>
          {messages.map((msg, i) => (
            <ChatBubble key={i} sender={msg.sender} text={msg.text} />
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={input}
            placeholder="메시지를 입력하세요..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>전송</button>
        </div>
      </div>
    </div>
  );
}
