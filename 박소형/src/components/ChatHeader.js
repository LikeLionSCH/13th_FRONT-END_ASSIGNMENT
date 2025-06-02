import React from 'react';
import '../styles/ChatHeader.css';

function ChatHeader() {
  return (
    <div className="chat-header">
      <img src="TeresaLai.jpg" alt="Profile" />
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
