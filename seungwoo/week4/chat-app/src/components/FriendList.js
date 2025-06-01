import React from "react";
import "../App.css";

const dummyFriends = ["김우석", "조아람", "김한울"];
const dummyChatList = [
  { name: "김우석", lastMessage: "우석우석" },
  { name: "조아람", lastMessage: "나무목" },
  { name: "김한울", lastMessage: "소화기기" }
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
