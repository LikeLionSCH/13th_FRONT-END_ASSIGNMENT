"use client"

import useServer from "./useServer"
import deleteData from "./deleteData"
import styles from "./page.module.css"

export default function History(){
    const {historyList, deleteHistory} = useServer("hanul")

    return (
        <>
        {
            historyList.map((history, index) => {
                return (
                <div>
                    {history.value}
                    <button className={styles["log-button"]} onClick={()=>deleteHistory(history.id, history.key)}>{index+1}번 기록 삭제</button>
                    <br />
                </div>)
            })
        }
        </>
    )
}