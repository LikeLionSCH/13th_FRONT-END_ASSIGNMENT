"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {useAtom} from"jotai";
import {keyAtom} from"../store";

//서버 주소를 전역변수
const SERVER_URL = "http://iubns.net:7000/";

export default function useServer() {
    const [historyList, setHistoryList] = useState([]);
    const [key] = useAtom(keyAtom);

    // 서버에서 데이터 가져오기
    async function fetchHistory() {
        if(!key){
            console.log("key가 존재하지 않아 데이터를 가져오지 않습니다.");
            return;
        } 
        try {
            console.log("서버에서 데이터 가져오는 중...");
            const { data } = await axios.get(`${SERVER_URL}?key=${key}`);
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
        if(!key){
            console.error("key 값이 설정되지 않았습니다.");
            console.log("key가 존재하지 않아 데이터를 추가하하지 않습니다.");
            return;
        } 
        try {
            console.log("서버로 보낼 값:", value);
            await axios.post(SERVER_URL, { key, value });
            await fetchHistory(); // 데이터 추가 후 최신 목록 가져오기
        } catch (error) {
            console.error("서버에 데이터 추가 실패:", error);
        }
    }

    useEffect(() => {
        fetchHistory();
    }, [key]);

    return {
        historyList,
        setHistoryList, 
        postHistory,
        fetchHistory
    };
}
