import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import FriendList from "./components/FriendList";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 채팅 화면 */}
          <Route path="/chat" element={
            <FriendList onSelectChat={(friend) => setSelectedFriend(friend)} />
          } />

          {/* 친구 선택 후 이동할 채팅 화면 */}
          <Route path="/chat/:friendName" element={
            <Chat selectedFriend={selectedFriend} onBack={() => setSelectedFriend(null)} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
