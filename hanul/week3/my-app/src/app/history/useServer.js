import { useEffect, useState } from "react"
import axios from "axios"

const apiurl = "http://iubns.net:7000/?"

export default function useServer(keys="hanul"){
    const [historyList, setHistoryList] = useState([])
    
    useEffect(()=>{
        fecthHistory()
    }, [])

    async function fecthHistory(){
        const {data} = await axios.get(apiurl, {
            params:{
                key:keys
            }
        })
        setHistoryList(data)
    }
    
    async function deleteHistory(ids, keys){
        await axios.delete(apiurl, {params:{
            id : ids,
            key : keys}
        })
        fecthHistory()
    }

    return {historyList,deleteHistory}
}
