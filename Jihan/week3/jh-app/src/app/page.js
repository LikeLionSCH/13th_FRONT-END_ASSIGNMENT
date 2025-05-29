"use client"

import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import React, { useState } from 'react';

export default function Home() {
   const [messageInfo, setMessageInfo] = useState([{
  type : "received",
  contents : "안녕하세요"
},{
  type : "received",
  contents : "반갑습니다 :D"
},{
  type : "sent",
  contents : "안녕 !"
},{
  type : "received",
  contents : "내일 약속있나"
}])

  return (
    <div className="chat-container">
      <ChatHeader /> 
      <ChatMessages goMes = {messageInfo}/>
      <ChatInput msgInput = {setMessageInfo}/>
    </div>
  );
}