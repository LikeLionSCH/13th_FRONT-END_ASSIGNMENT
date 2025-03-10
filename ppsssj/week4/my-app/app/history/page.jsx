"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./history.module.css";
import {TextField} from "@mui/material";
import Alert from '@mui/material/Alert';
import {useAtom} from "jotai";
import {keyAtom} from "../store";

export default function History() {
    const [historyList, setHistoryList] = useState([]); // 서버 데이터 저장
    const [selectedHistory, setSelectedHistory] = useState([]); // 선택된 항목 저장
    const [alertMessage, setAlertMessage] = useState(null); //알림 메시지 
    const [key] = useAtom(keyAtom); //jotai에서 key가져오기기
    
    // 서버에서 데이터 가져오기
    async function fetchHistory() {
        if(!key){
            console.log("key가 존재하지 않아 데이터를 가져오지 않습니다.");
            return;
        } 
        try {
            const response = await axios.get(`http://iubns.net:7000/?key=${key}`);
            setHistoryList(response.data); // 최신 데이터 읽어드림림
            console.log("서버에서 받은 최신 데이터:", response.data); 
            
        } catch (error) { 
            console.error("서버에서 데이터를 불러오는 중 오류 발생:", error);
        }
    }

    // 최초 렌더링, key변경경 시 데이터 가져오기
    useEffect(() => {
        fetchHistory();
    }, [key]);

    // 선택한 항목 저장
    function handleSelect(id) {
        setSelectedHistory((prevSelected) => {
            const newSelected = prevSelected.includes(id)
                ? prevSelected.filter((selectedId) => selectedId !== id) // 선택 해제
                : [...prevSelected, id]; // 선택 추가
            console.log("선택된 수식 ID:", newSelected);
            return newSelected;
        });
    }

    // selectedHistory 변경될 때 로그 출력력
    useEffect(() => {
        console.log("현재 선택된 항목:", selectedHistory);
    }, [selectedHistory]);

    // 삭제 기능
    async function handleDelete() {
        if(!key){
            console.log("key가 존재하지 않아 데이터를 삭제하지 못합니다.");
            return;
        }
        try {
            await Promise.all(
                selectedHistory.map((id) =>
                    axios.delete(`http://iubns.net:7000/?key=${key}&id=${id}`)
                )
            );
            setAlertMessage("Success Delete.");
            console.log("서버에서 항목 삭제 성공");
            await fetchHistory(); // 최신 데이터 가져오기기
            setSelectedHistory([]); // 선택 초기화
        } catch (error) {
            console.error("서버에서 항목 삭제 중 오류 발생:", error);
            setAlertMessage("Delete Failed.");
        }
    }

    return (
        <div className={styles.historyContainer}>
            <div className={styles.titleStyle}>계산 기록</div>
            <div>{key}</div>
            {alertMessage && <Alert variant="outlined" severity="success">{alertMessage}</Alert>}
            {historyList && historyList.length > 0 ? (  // 데이터가 있을 때만 map 실행            
             historyList.map((history) => (
                <div key={history.id} className={styles.historyItem}>
                    <div className={styles.line}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox}
                            onChange={() => handleSelect(history.id)}
                            checked={selectedHistory.includes(history.id)}
                        />
                        <div>{history.value}</div>
                    </div>
                </div>
            ))
        ):(<div>데이터가 없습니다.</div>)}
            <button className={styles.deleteButton} onClick={handleDelete}>Del</button>
        </div>
    );
}
