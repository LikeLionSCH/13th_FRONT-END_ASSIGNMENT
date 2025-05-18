import React from 'react';
import '../style/ChatList.css'; 

function ChatList({ onChatClick, onFriendClick }) {
  return (
    <div className="chat-list-container">
      <h2>채팅 목록</h2>
      <ul className="chat-list">
        <li onClick={onChatClick}>💬 Teresa Lai</li>
      </ul>
      <button onClick={onFriendClick} className="friend-button">친구 추가</button>
    </div>
  );
}

export default ChatList;
