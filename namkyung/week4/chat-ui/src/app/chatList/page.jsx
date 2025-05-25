"use client";
import styles from "./page.module.css";
import MessageListItem from "./MessageListItem";

export default function ChatList({inputValue}){
    const messageList = [
        {name: "민병관", message: "........", sendTime:"오후 3:45   >"},
        {name: "02-1234-5678", message: "(광고) 대박 할인 오늘까지! 이 기회 놓치지 말고 어서 빨리 서두르세요~", sendTime:"어제   >"},
        {name: "짱구", message: "뭐하니?", sendTime:"어제   >"},
        {name: "맹구", message: "뭐하니?", sendTime:"어제   >"},
        {name: "유리", message: "뭐하니?", sendTime:"어제   >"},
        {name: "훈이", message: "뭐하니?", sendTime:"어제   >"},
        {name: "철수", message: "뭐하니?", sendTime:"어제   >"},
        {name: "채송화 선생님", message: "뭐하니?", sendTime:"어제   >"}
    ]

    return(
        <div className={styles.Container}>
            <div className={styles.Header}>
                <div className={styles.Edit}>
                    <h3>편집</h3>
                    <h3>작성</h3>
                </div>
                <h1>메시지</h1>
                <div className={styles.SearchBar}>
                <input
                type="text"
                value={inputValue}
                placeholder="검색"
                />
                </div>
            </div>
            <div className={styles.MessageListContents}>
                {/*메시지 목록*/}
                {messageList.map((msg,idx)=>(
                    <MessageListItem key={idx} name={msg.name} message={msg.message} sendTime={msg.sendTime}/>
                ))}
            </div>
        </div>
    );
}