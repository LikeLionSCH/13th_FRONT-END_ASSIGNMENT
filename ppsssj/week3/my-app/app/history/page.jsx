"use client";

import { useEffect, useState } from "react";
import useServer from "./useServer"; // ✅ useHistory import
import axios from "axios"; // axios 추가
import styles from "./history.module.css"; // CSS 파일 불러오기

export default function History() {
    const { historyList, setHistoryList } = useServer(); // 데이터 가져옴
    const [selectedHistory, setSelectedHistory] = useState([]);

    useEffect(() => {
        console.log("📌 서버에서 받은 데이터:", historyList); // ✅ 데이터 확인
    }, [historyList]); // historyList가 변경될 때마다 실행

    //선택한 항목 저장
    function handleSelect(index) {
        const isSelected = selectedHistory.includes(index);
        if (isSelected) {
            // 이미 선택된 경우 선택 해제
            setSelectedHistory(selectedHistory.filter((idx) => idx !== index));
        } else {
            // 선택되지 않은 경우 선택 추가
            setSelectedHistory([...selectedHistory, index]);
        }
        console.log("선택된 수식 index:", selectedHistory);
    }

    //삭제 기능
    function handleDelete() {
        const itemsToDelete = selectedHistory.map((index) => historyList[index]); // 삭제할 항목 선택
        // 서버에 삭제 요청 보내기
        Promise.all(itemsToDelete.map((item) =>
            axios.delete(`http://iubns.net:7000/?key=sungjin&id=${item.id}`) // id를 기반으로 삭제
        ))
        .then((responses) => {
            console.log("서버에서 항목 삭제 성공:", responses);
            const updatedHistory = historyList.filter((_, idx) => !selectedHistory.includes(idx));
            setHistoryList(updatedHistory); // 클라이언트 상태 업데이트
            setSelectedHistory([]); // 선택 초기화
        })
        .catch((error) => {
            console.error("서버에서 항목 삭제 중 오류 발생:", error); // 오류 로그
        });
    }

    return (
        <div className={styles.historyContainer}>
            <div className={styles.titleStyle}>계산 기록</div>
            {historyList.map((history, index) => (
                <div key={index} className={styles.historyItem}>
                    <div className={styles.line}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox} // 체크박스를 숨김
                            onChange={() => handleSelect(index)} // 상태 변경
                            checked={selectedHistory.includes(index)} // 체크 여부 결정
                        />
                        <div>{history.value}</div>
                    </div>
                </div>
            ))}
            <button className={styles.deleteButton} onClick={handleDelete}>Del</button>
        </div>
    );
}
