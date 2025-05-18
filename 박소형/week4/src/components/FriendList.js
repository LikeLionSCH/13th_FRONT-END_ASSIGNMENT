import React, { useState } from 'react';
import '../style/FriendList.css'; 

function FriendList({ onBack }) {
  const [friends, setFriends] = useState([
    { name: '박소형', added: false },
    { name: '냥냥이', added: false },
    { name: 'Teresa Lai', added: true }
  ]);

  const handleAdd = (index) => {
    const updated = [...friends];
    updated[index].added = true;
    setFriends(updated);
  };

  return (
    <div className="friend-list-container">
      <h2>친구 추가 목록</h2>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li key={index}>
            {friend.name}
            {friend.added ? (
              <span className="added">✔️ 추가됨</span>
            ) : (
              <button onClick={() => handleAdd(index)}>+</button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={onBack} className="back-button">◀ 돌아가기</button>
    </div>
  );
}

export default FriendList;
