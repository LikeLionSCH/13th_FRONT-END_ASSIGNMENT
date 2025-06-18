import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function Chat({ selectedFriend, onBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  const addMessage = (text, type) => {
    setMessages((prev) => [...prev, { text, type }]);
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    addMessage(input, "sent");
    setInput("");
    setTimeout(() => addMessage("자동 응답 메시지", "receive"), 1000);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat_window">
      <div className="chat_header">
        <button onClick={onBack}>←</button>
        <h3>{selectedFriend}</h3>
      </div>
      <div className="chatting_container" ref={chatContainerRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.type === "sent" ? "sent_message_container" : "receive_message_container"}>
            <div className={msg.type === "sent" ? "sent_message" : "receive_message"}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input_field">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>전송</button>
      </div>
    </div>
  );
}

export default Chat;
