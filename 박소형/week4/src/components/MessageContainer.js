import React from 'react';
import '../style/MessageContainer.css';


function MessageContainer({ text, type, className }) {
  return (
    <div className={`message-container ${type}`}>
      {type === 'received' && (
        <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} alt="Profile" />
      )}
      <div className={`message ${className || ''}`}>{text}</div>
    </div>
  );
}

export default MessageContainer;
