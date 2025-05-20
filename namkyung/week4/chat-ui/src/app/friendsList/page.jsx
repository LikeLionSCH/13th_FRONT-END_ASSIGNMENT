"use client";
import styles from "./page.module.css";
import Friend from "./Friend";

export default function FriendsList({inputValue}){
    const friendsList = [
        {name: "민병관"},
        {name: "짱구"},
        {name: "맹구"},
        {name: "유리"},
        {name: "훈이"},
        {name: "철수"},
        {name: "채송화 선생님"},
        {name: "나미리 선생님"},
        {name: "원장 선생님"},
        {name: "침착맨"},
        {name: "전무님"},
        {name: "차돌짬뽕"},
        {name: "통천"}
    ]

    return(
        <div className={styles.Container}>
            <div className={styles.Header}>
                <div className={styles.Edit}>
                    <h3>목록</h3>
                    <h3>추가</h3>
                </div>
                <h1>연락처</h1>
                <div className={styles.SearchBar}>
                <input
                type="text"
                value={inputValue}
                placeholder="검색"
                />
                </div>
            </div>
            <div className={styles.FriendContents}>
                {/*친구 목록*/}
                {friendsList.map((n,idx)=>(
                    <Friend key={idx} name={n.name}></Friend>
                ))}
            </div>
        </div>
    );
}