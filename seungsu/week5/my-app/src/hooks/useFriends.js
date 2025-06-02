// hooks/useFriends.js
"use client";
import { useEffect, useState } from "react";

const API_BASE = "http://home.iubns.net:8090";

export function useFriends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFriends = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/friend`, {
        method: "GET",
        credentials: "include", // ✅ 쿠키 기반 인증
      });

      if (!res.ok) throw new Error("친구 목록 불러오기 실패");

      const data = await res.json();
      setFriends(data.friends || []);
    } catch (err) {
      alert("친구 목록 오류: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return { friends, loading };
}