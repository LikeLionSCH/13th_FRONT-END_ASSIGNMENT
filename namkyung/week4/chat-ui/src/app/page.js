"use client";

import { useState, useRef, useEffect } from "react";
import MessageContents from "../Components/MessageContents";
import MessageInput from "../Components/MessageInput";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {
  const [messages, setMessages] = useState([
    { text: "배고프다", side: "left" },
    { text: "나도", side: "right" },
    { text: "저녁 뭐 드실?", side: "right" },
    { text: "아무거나", side: "left" },
    { text: "치킨 먹을까?", side: "right" },
    { text: "치킨만 빼고", side: "left" },
    { text: "...", side: "right" },
    { text: "떡볶이 먹자", side: "right" },
    { text: "아 치킨이랑 떡볶이만 빼고", side: "left" },
    { text: "........", side: "right" }

  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // 메시지 전송 함수
  const sendMessage = () => {
    const text = inputValue.trim();
    if (text === "") return;

    //내가 보낸 메시지
    setMessages((prev) => [...prev, { text, side: "right" }]);
    setInputValue("");

    //1초뒤 답장
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "ㅇㅇ", side: "left" }]);
    }, 1000);
  };

  //채팅목록창으로 이동
  const {push}=useRouter()
  const handleGoToChatList=()=>{
      push("/chatList")
  }

  // 새 메시지 추가될 때마다 스크롤 아래로
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.chatContainer}>

      <div className={styles.chatHeader}>
        <img className={styles.arrow} src="/arrow.jpg" alt="뒤로가기"
        onClick={handleGoToChatList} />
        <div className={styles.who}>
          <img className={styles.userPicture} src="/user.jpg" alt="유저 사진" />
          <div className={styles.userName}>
            <span className={styles.name}>민병관</span>
            <img className={styles.arrowGray} src="/arrow_gray.jpg" alt="유저 정보 보기" />
          </div>
        </div>
        <img className={styles.facetime} src="/facetime.jpg" alt="페이스타임" />
      </div>

      {/* 메시지 내용 렌더링 */}
      <MessageContents messages={messages} messagesEndRef={messagesEndRef} />

      {/* 입력창 */}
      <MessageInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSend={sendMessage}
      />
    </div>
  );
}
