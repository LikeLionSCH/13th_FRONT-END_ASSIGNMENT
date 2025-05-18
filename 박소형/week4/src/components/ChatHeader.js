import React from 'react';
import '../style/ChatHeader.css'; // ✅ 헤더 전용


function ChatHeader() {
  return (
    <div className="chat-header">
      <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} alt="Profile" />
      <div className="chat-header-text">
        <h2>Teresa Lai</h2>
        <div className="username">teresalai_</div>
      </div>
      <div className="icons">
        <span>📞</span>
        <span>📁</span>
      </div>
    </div>
  );
}

export default ChatHeader;
