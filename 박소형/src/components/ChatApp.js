import React, { useState } from 'react';
import ChatHeader from '../../week3';
import MessageContainer from './MessageContainer';
import EditBox from './EditBox';

function ChatApp() {
  const [messages, setMessages] = useState([
    { text: "Anytime. Let me know if you want to link up again!", type: "received" },
    { text: "Lets def go again. Best spa in the city!", type: "sent" },
    { text: "Can you send the pic you took while we were there?", type: "sent", class: "purple" }
  ]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "sent" }
    ]);

    setTimeout(() => {
      const replies = [
        "Sure, I got it!",
        "I'll send it right now 😄",
        "One moment!",
        "Yep, gotcha!",
        "Haha that was fun!"
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: reply, type: "received" }
      ]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <MessageContainer key={index} text={msg.text} type={msg.type} class={msg.class} />
        ))}
      </div>
      <EditBox onSend={handleSendMessage} />
    </div>
  );
}

export default ChatApp;
