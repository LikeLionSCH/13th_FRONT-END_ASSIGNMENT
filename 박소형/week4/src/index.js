import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css'; // ✅ 전역 스타일 (예: body, 배경 등 있을 경우)

import ChatApp from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>
);

reportWebVitals();
