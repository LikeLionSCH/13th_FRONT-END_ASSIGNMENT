"use client";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../atoms/auth";

const API = "http://home.iubns.net:8080";

export default function useAuth() {
  const [, setAccessToken] = useAtom(accessTokenAtom);

  const login = async (username, password) => {
    const res = await fetch(`http://home.iubns.net:8080/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    if (res.ok) {
      const accessToken = res.headers.get("Authorization");
      setAccessToken(accessToken);
      return true;
    }
    alert("로그인 실패");
    return false;
  };

  const signup = async (username, password) => {
    try {
      const res = await fetch(`${API}/api/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      return res.ok;
    } catch (err) {
      console.error("회원가입 요청 실패:", err);
      alert("서버 연결 실패");
      return false;
    }
  };

  return { login, signup };
}