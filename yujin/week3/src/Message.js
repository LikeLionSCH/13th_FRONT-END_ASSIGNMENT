import React from 'react';

export default function Message({ type, text, time }) {
    return (
        <div className={`message ${type === 'my' ? 'my-message' : 'other-message'}`}>
            {text}
            <div className="time">{time}</div>
        </div>
    );
}
