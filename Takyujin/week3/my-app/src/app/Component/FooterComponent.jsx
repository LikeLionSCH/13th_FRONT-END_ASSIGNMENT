"use client"
import { useState } from "react";
import footerstyles from "../css/footer.module.css";
const autoReplies = [
        "좋아요!",
        "괜찮습니다!",
        "방금 도착했습니다.",
        "오늘 날씨 좋네요.",
        "회의 언제 시작하죠?",
        "오늘 하루 어떠셨나요?",
        "ㅋㅋㅋㅋ",
        "감사합니다!",
        "오늘 벚꽃이 이쁘네요!"
    ];

const replyers=[
      "백엔드 재빈",
      "멋사 운영진 조건희",
      "멋사 운영진 이은정",
      "멋사 백엔드 김재환"
];
  

function Footer({setMessageList}){
    const[message,send]=useState()

    function sendMessage(){
    
        setMessageList(pre => [...pre,
            {
                id:4,
                who:"me",
                message
            }
        ])

        setTimeout(()=>{
          const randomIndex = Math.floor(Math.random() * autoReplies.length); //랜덤 함수
                const replyText = autoReplies[randomIndex]; //아무 연락 오게 하는 코드드
          const randomIndex1 = Math.floor(Math.random() * replyers.length);
                const replyers1=replyers[randomIndex1];
                setMessageList(pre => [...pre,
            {
                id:5,
                who:replyers1,
                message: replyText
            }
        ])
        },1000)
        //index++, 타임아웃, 
        
    }

    return <footer>
    <div className={footerstyles["footer-block"]}>
      <div className={footerstyles["plus_icons"]}>
        <img src="assets/plus.svg" alt="추가" />
      </div>
      <div className={footerstyles["type"]}>
        <input type="text" id="chatInput"
        onChange={e=>send(e.target.value)} //e=event input의 값(value)을 받겠다.
        placeholder="메세지 입력" />
      </div>
      <div className={footerstyles["imote_icons"]}>
        <img src="assets/smile.svg" alt="이모티콘" />
      </div>
      <div className={footerstyles["send_icons"]}id="sendBtn">
        <img src="assets/send.svg" alt="전송"
        onClick={sendMessage}
        />
      </div>
    </div>
  </footer>
  }
  export default Footer


  //. 현재 디렉토리에서 안에 있는파일 
  //.. 부모디렉토리다