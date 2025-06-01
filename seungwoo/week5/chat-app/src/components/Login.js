import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("로그인 시도:", id, pw);
    navigate("/chat");
  };

  return (
    <div className="form-container">
      <h2>로그인</h2>
      <input placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
      <p onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>회원가입</p>
    </div>
  );
}

export default Login;
