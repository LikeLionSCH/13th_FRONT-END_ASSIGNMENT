"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./history.module.css";

function useServer(fetchHistory){ //재랜더링과 상관 없이 
    const [selectedHistory, setSelectedHistory] = useState([]);

    function handleSelect(id) {
        setSelectedHistory((prevSelected) => {
            const newSelected = prevSelected.includes(id)
                ? prevSelected.filter((selectedId) => selectedId !== id) // 선택 해제
                : [...prevSelected, id]; // 선택 추가
            console.log("선택된 수식 ID:", newSelected);
            return newSelected;
        });
    }

    // 삭제 기능
    async function handleDelete() {
        try {
            await Promise.all(
                selectedHistory.map((id) =>
                    axios.delete(`http://iubns.net:7000/?key=sungjin&id=${id}`)
                )
            );
            console.log("서버에서 항목 삭제 성공");
            await fetchHistory(); // 최신 데이터 가져오기기
            setSelectedHistory([]); // 선택 초기화
        } catch (error) {
            console.error("서버에서 항목 삭제 중 오류 발생:", error);
        }
    }
    return {selectedHistory, handleSelect, handleDelete};
}

export default function History() {
    const [historyList, setHistoryList] = useState([]); // 서버 데이터 저장
    const { selectedHistory, handleSelect, handleDelete } = useServer(fetchHistory);

    // 서버에서 데이터 가져오기
    async function fetchHistory() {
        try {
            const response = await axios.get("http://iubns.net:7000/?key=sungjin");
            setHistoryList(response.data); // 최신 데이터 읽어드림림
            console.log("서버에서 받은 최신 데이터:", response.data); 
        } catch (error) { 
            console.error("서버에서 데이터를 불러오는 중 오류 발생:", error);
        }
    }

    //최초 렌더링 시 데이터 가져오기
    useEffect(() => {
        fetchHistory();
    }, []);

    //항목 선택 시 로그 표출
    useEffect(() => {
        console.log("현재 선택된 항목:", selectedHistory);
    }, [selectedHistory]);

    return (
        <div className={styles.historyContainer}>
            <div className={styles.titleStyle}>계산 기록</div>
            {historyList.map((history) => (
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
            ))}
            <button className={styles.deleteButton} onClick={handleDelete}>Del</button>
        </div>
    );
}
