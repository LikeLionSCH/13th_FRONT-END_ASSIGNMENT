"use client";
import { useState, useEffect } from "react";
import axios from "axios";

//서버 주소를 전역변수
const SERVER_URL = "http://iubns.net:7000/";

export default function useServer() {
    const [historyList, setHistoryList] = useState([]);

    // 서버에서 데이터 가져오기
    async function fetchHistory() {
        try {
            console.log("서버에서 데이터 가져오는 중...");
            const { data } = await axios.get(`${SERVER_URL}?key=sungjin`);
            console.log("서버에서 받은 데이터:", data);
            setHistoryList(data);
        } catch (error) {
            console.error("서버에서 데이터 가져오기 실패:", error);
        }
    }
    //서버에서 데이터 추가하기기   
    //콜백 지옥 주의   (콜백지옥 : 비동기 처리에서 다수의 콜백 함수로 인해 코드를 읽기 어려워지는 현상)
    //콜백 지옥 해결 방안 async fuction, await : 비동기 코드를 동기 코드처럼 읽음음   
    async function postHistory(value) {
        try {
            console.log("서버로 보낼 값:", value);
            await axios.post(SERVER_URL, { key: "sungjin", value });
            await fetchHistory(); // 데이터 추가 후 최신 목록 가져오기
        } catch (error) {
            console.error("서버에 데이터 추가 실패:", error);
        }
    }

    useEffect(() => {
        fetchHistory();
    }, []);

    return {
        historyList,
        setHistoryList, 
        postHistory,
        fetchHistory
    };
}
