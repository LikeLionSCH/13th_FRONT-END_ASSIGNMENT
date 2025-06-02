"use client";
import { useSearchParams } from "next/navigation";
import useChats from "../../../hooks/useChats";
import { useState } from "react";

export default function ChatRoom({ params }) {
  const { id: roomId } = params;
  const { messages, loading, sendMessage } = useChats(roomId);
  const [msg, setMsg] = useState("");
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  if (loading) return <p>로딩 중...</p>;

  return (
    <main className="gradient-background">
      <div className="chat-container">
        {/* 채팅 헤더 */}
        <div className="chat-header">
          <div className="profile">
            <img src="https://via.placeholder.com/36" alt="profile" />
            <span>{name}</span>
          </div>
          <div className="icons">📞 🎥</div>
        </div>

        {/* 메시지 표시 영역 */}
        <div className="chat-messages">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`message ${m.username === name ? "received" : "sent"}`}
            >
              {m.content}
            </div>
          ))}
        </div>

        {/* 메시지 입력창 */}
        <div className="chat-input">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="메시지 입력..."
          />
          <button
            onClick={() => {
              sendMessage(msg);
              setMsg("");
            }}
          >
            ⬆️
          </button>
        </div>
      </div>
    </main>
  );
}