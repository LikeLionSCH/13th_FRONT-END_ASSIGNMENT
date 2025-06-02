import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (pw !== confirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("회원가입 시도:", id, pw);
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>회원가입</h2>
      <input placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
      <input type="password" placeholder="비밀번호 확인" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <button onClick={handleRegister}>회원가입</button>
      <p onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>로그인</p>
    </div>
  );
}

export default Register;
