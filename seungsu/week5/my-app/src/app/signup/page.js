"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signup(username, password);
    if (success) router.push("/login");
  };

  return (
    <main className="gradient-background">
      <div className="auth-box">
        <h2>회원가입</h2>
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
          <button type="submit">가입하기</button>
        </form>
      </div>
    </main>
  );
}