"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      router.push("/friends");
    }
  };

  return (
    <main className="gradient-background">
      <div className="auth-box">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>

        {/* 👇 회원가입 이동 버튼 */}
        <button
          style={{
            marginTop: "10px",
            background: "none",
            color: "#3897f0",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline"
          }}
          onClick={() => router.push("/signup")}
        >
          아직 회원이 아니신가요? 회원가입
        </button>
      </div>
    </main>
  );
}