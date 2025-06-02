import React, { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
    const [messages, setMessages] = useState([
        { id: 1, type: 'my', text: '별 하나에 추억과', time: '18:20' },
        { id: 2, type: 'other', text: '별 하나에 사랑과 별', time: '18:30' }
    ]);
    const [input, setInput] = useState('');

    const getCurrentTime = () => {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        return `${h}:${m}`;
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMsg = {
            id: messages.length + 1,
            type: 'my',
            text: input,
            time: getCurrentTime()
        };

        setMessages(prev => [...prev, newMsg]);
        setInput('');

        // 1초 뒤 상대방 응답 추가
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    id: prev.length + 1,
                    type: 'other',
                    text: '답장~.~',
                    time: getCurrentTime()
                }
            ]);
        }, 1000);
    };

    return (
        <div className="chat-wrapper">
            {/* 헤더 */}
            <div className="chat-header">
                <img src="/BackIcon.png" alt="Back" className="icon back-icon" />
                <div className="profile">
                    <img src="/PersonPicture.png" alt="Profile" className="profile-picture" />
                    <div className="profile-info">
                        <div className="name">홍길동</div>
                        <div className="status">Online</div>
                    </div>
                </div>
                <div className="header-icons">
                    <img src="/VideoCallIcon.png" alt="Video" className="icon" />
                    <img src="/CallIcon.png" alt="Call" className="icon" />
                </div>
            </div>

            {/* 메시지 목록 */}
            <div className="chat-body">
                {messages.map(msg => (
                    <Message key={msg.id} type={msg.type} text={msg.text} time={msg.time} />
                ))}
            </div>

            {/* 입력창 */}
            <div className="chat-input">
                <img src="/AddIcon.png" alt="Add" className="icon" />
                <input
                    type="text"
                    placeholder="메시지 입력"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className="input-icons">
                    <img src="/CameraIcon.png" alt="Camera" className="icon" />
                    <img src="/MicIcon.png" alt="Mic" className="icon" />
                </div>
                <button className="send-button" onClick={sendMessage}>전송</button>
            </div>
        </div>
    );
}

export default App;
