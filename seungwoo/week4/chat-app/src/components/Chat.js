import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function Chat({ selectedFriend, onBack }) {
  const [messages, setMessages] = useState([
    { text: "으아아아아악", type: "sent" },
    { text: "끄아아아아악", type: "sent" },
    { text: "으아아아아악", type: "receive" },
    { text: "끄아아아아악", type: "receive" }
  ]);

  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  const addMessage = (message, type) => {
    setMessages((prev) => [...prev, { text: message, type }]);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;
    addMessage(trimmed, "sent");
    setInput("");
    setTimeout(() => addMessage("으아아아악악", "receive"), 1000);
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat_window">
      <div className="chat_header">
        <button onClick={onBack}>←</button>
        <h3>{selectedFriend}</h3>
      </div>
      <div className="chatting_container" ref={chatContainerRef}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.type === "sent"
                ? "sent_message_container"
                : "receive_message_container"
            }
          >
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
