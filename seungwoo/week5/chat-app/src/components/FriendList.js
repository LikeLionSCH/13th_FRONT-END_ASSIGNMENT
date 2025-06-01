import React from "react";
import "../App.css";

const dummyFriends = ["김철수", "이영희", "박민수"];
const dummyChatList = [
  { name: "김철수", lastMessage: "안녕?" },
  { name: "이영희", lastMessage: "뭐해?" },
  { name: "박민수", lastMessage: "나 지금 간다" }
];

function FriendList({ onSelectChat }) {
  return (
    <div className="friend_list">
      <h2>친구 목록</h2>
      <ul>
        {dummyFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
      <h2>채팅 목록</h2>
      <ul>
        {dummyChatList.map((chat, idx) => (
          <li key={idx} onClick={() => onSelectChat(chat.name)}>
            <strong>{chat.name}</strong>: {chat.lastMessage}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
