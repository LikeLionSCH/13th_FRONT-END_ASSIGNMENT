import axios from "axios"

const apiurl = "http://iubns.net:7000/"

export default function sendPost(keys, values){
    
    async function addHistory(){
        axios.post(apiurl, {
            key: keys,
            value: values
        })
    }

    addHistory()
}