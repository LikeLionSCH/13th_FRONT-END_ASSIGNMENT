import React, { useState } from 'react';
import '../style/EditBox.css';

function EditBox({ onSend }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => setText(e.target.value);

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 줄바꿈 막기
      handleSend();       // 메시지 전송
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-label">
        Edit message <span>X</span>
      </div>
      <div className="edit-box">
        <textarea
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}  // 엔터 눌러도 전송되도록 추가함
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Done</button>
      </div>
    </div>
  );
}

export default EditBox;
