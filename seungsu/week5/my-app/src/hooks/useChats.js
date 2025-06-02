// hooks/useChats.js
"use client";
import { useEffect, useState } from "react";

const API_BASE = "http://home.iubns.net:8090";

export function useChats(roomId) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 채팅 불러오기
  const fetchChats = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/chat/${roomId}`, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) throw new Error("채팅 불러오기 실패");

      const data = await res.json();
      setMessages(data);
    } catch (err) {
      alert("채팅 오류: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 채팅 보내기
  const sendMessage = async (content) => {
    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          roomId,
          content,
        }),
      });

      if (!res.ok) throw new Error("전송 실패");

      await fetchChats(); // 전송 후 다시 채팅 목록 새로고침
    } catch (err) {
      alert("메시지 전송 오류: " + err.message);
    }
  };

  useEffect(() => {
    fetchChats();
  }, [roomId]);

  return { messages, loading, sendMessage };
}