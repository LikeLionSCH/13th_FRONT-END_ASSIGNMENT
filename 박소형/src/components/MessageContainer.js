import React from 'react';
import '../styles/MessageContainer.css';

function MessageContainer({ text, type, className }) {
  return (
    <div className={`message-container ${type}`}>
      {type === 'received' && <img src="TeresaLai.jpg" alt="Profile" />}
      <div className={`message ${className || ''}`}>{text}</div>
    </div>
  );
}

export default MessageContainer;
