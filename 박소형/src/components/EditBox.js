import React, { useState } from 'react';
import './EditBox.css';

function EditBox({ onSend }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => setText(e.target.value);
  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
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
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Done</button>
      </div>
    </div>
  );
}

export default EditBox;
