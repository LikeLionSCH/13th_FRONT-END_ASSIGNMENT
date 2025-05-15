"use client"

import Header from"./Component/HeaderComponent"
import Chatbox from"./Component/MainComponent"
import Footer from"./Component/FooterComponent"
import { useState } from "react"
export default function Home() { //랜더링 될 때 실행
  
const[messageList,setMessageList]=useState([])
  return (
    <>
    
<Header/>    
<Chatbox Chat={messageList}/>
<Footer setMessageList={setMessageList}/>   
       
    </>
  );
}
