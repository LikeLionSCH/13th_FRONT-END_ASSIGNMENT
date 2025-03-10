"use client";

import { useEffect, useState } from "react";
import styles from "./history.module.css";
import useServer from "./useServer";

export default function History() {
    const {historyList, selectedHistory,
        handleSelect, handleDelete,
    } = useServer();
    
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
