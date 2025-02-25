"use client"; 
import { useState, useEffect } from "react";
import axios from "axios";

export default function useServer() {
    const [historyList, setHistoryList] = useState([]);

    async function fetchHistory() {  
        console.log("📌 서버에서 데이터 가져오는 중...");
        const { data } = await axios.get("http://iubns.net:7000/?key=sungjin");
        console.log("📌 서버에서 받은 데이터:", data); // ✅ 콘솔 출력 추가
        setHistoryList(data); // 서버에서 받은 데이터로 상태 업데이트
    }

    useEffect(() => {
        fetchHistory();
    }, []);

    function postHistory(value) {
        console.log("서버로 보낼 값 1:", value);
        axios.post("http://iubns.net:7000/", {
            key: "sungjin", 
            value: value
        })
        .then((response) => {
            console.log("서버로부터의 응답:", response.data); // 서버의 응답 로그
            fetchHistory();
        })
        .catch((error) => {
            console.error("서버에 값을 보낼 때 오류 발생:", error); // 오류 로그
        });
    }
    
    return {
        historyList,
        setHistoryList, 
        postHistory,
        fetchHistory
    };
}
