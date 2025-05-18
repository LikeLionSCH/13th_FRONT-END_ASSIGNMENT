import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageContainer from './MessageContainer';
import EditBox from './EditBox';
import '../style/App.css'; // ✅ 전체 화면 레이아웃 + 메시지 + 입력창 포함


function ChatApp({ onBack }) {
  const [messages, setMessages] = useState([
    { text: "Anytime. Let me know if you want to link up again!", type: "received" },
    { text: "Lets def go again. Best spa in the city!", type: "sent" },
    { text: "Can you send the pic you took while we were there?", type: "sent", class: "purple" }
  ]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "sent", class: "purple" }
    ]);

    setTimeout(() => {
      const replies = [
        "Sure, I got it!",
        "I'll send it right now 😄",
        "One moment!",
        "Yep, gotcha!",
        "Haha that was fun!"
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: reply, type: "received" }
      ]);
    }, 1000);
  };

  return (
        <div className="chat-container">
      {/* ✅ 상단에 돌아가기 버튼 추가*/}
      <div style={{ padding: '10px' }}>
        <button onClick={onBack} style={{
          backgroundColor: '#ddd',
          border: 'none',
          borderRadius: '6px',
          padding: '6px 12px',
          cursor: 'pointer'
        }}>
          ◀ 채팅 목록
        </button>
      </div>
      <ChatHeader />
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <MessageContainer key={index} text={msg.text} type={msg.type} className={msg.class} />
        ))}
      </div>
      <EditBox onSend={handleSendMessage} />
    </div>
  );
}

export default ChatApp;
