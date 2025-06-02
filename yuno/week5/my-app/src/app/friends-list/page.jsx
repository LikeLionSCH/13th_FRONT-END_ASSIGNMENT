// 'friends-list'페이지
'use client'

import { useEffect, useState } from "react"
import style from "./friendListPage.module.css"
import FooterNav from "../Components/Footer/FooterNav"
import Button from "../Components/Button/Button"
import AddFriendModal from "../Components/FriendsList/AddFriendModal/AddFriendModal"

const dummyFriends = [
  "친구1",
  "친구2",
  "친구3",
  "친구4",
]
const dummyRecvFriends = [
  "나에게친추1",
  "나에게친추2",
  "나에게친추3",
  "나에게친구4",
]
const dummyWaitingFriends = [
  "내가친추1",
  "내가친추2",
  "내가친추3",
  "내가친추4",
]

const FriendsListPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  // const [friends, setFriends] = useState([])
  // const [recvFriends, setRecvFriends] = useState([])
  // const [waitingFriends, setWaitingFriends] = useState([])
  const [friends, setFriends] = useState([])

  const getFriends = async () => {
    try {
      const response = await fetch("http://home.iubns.net:8080/api/friend", {
        credentials : "include"
      })
      // const {friends, recvFriends, waitingFriends} = await response.json()
      const data = await response.json()
      // setFriends(friends)
      // setRecvFriends(recvFriends)
      // setWaitingFriends(waitingFriends)
      setFriends(data)
    } catch(err) {
      console.error(err)
      // setFriends(dummyFriends)
      // setRecvFriends(dummyRecvFriends)
      // setWaitingFriends(dummyWaitingFriends)
      setFriends({friends : dummyFriends, recvFriends : dummyRecvFriends, waitingFriends : dummyWaitingFriends})
      alert('친구목록 불러오기 실패!')
    }
  }

  useEffect(() => {
    getFriends()
  }, [])

  return (
    <>
      {isOpen ? <AddFriendModal setIsOpen={setIsOpen} getFriends = {getFriends}/> : null}
      <div className={style.content}>
        <span className={`material-symbols-outlined ${style.addIcon}`} onClick={() => setIsOpen(true)}>person_add</span>
        <h1>친구</h1>
        {friends.friends?.length == 0 ? 
          <h3>친구없음</h3> 
          : 
          <ul>
            {friends.friends?.map((el,idx) => {
              return (
                <li key={`${el}${idx}`} className={style.li}>
                  <div className={style.info}>
                    <div className={style["profile-img"]}></div>
                    <span>{el}</span>
                  </div>
                  <Button text={"삭제"} clickHandler={async () => {
                    console.log(`${el} 친구목록에서 삭제 요청`);
                    try {
                      const response = await fetch(`http://home.iubns.net:8080/api/friend/${encodeURIComponent(el)}`, {
                        method : "DELETE",
                        credentials : "include"
                      })
                      getFriends() // 삭제해서 "친구목록" 에서 사라진거 반영하기위해서
                    }catch(err) {
                      console.error(err)
                      console.log(`${el} 친구삭제 실패!`);
                      alert(`${el} 친구삭제 실패!`)
                    }
                  }}/>
                </li>
              )
            })}
          </ul>
        }
        <h2>나에게온 요청</h2>
        {friends.recvFriends?.length == 0 ? 
          <h3>받은 요청 없음</h3> 
          : 
          <ul>
            {friends.recvFriends?.map((el,idx) => {
              return (
                <li key={`${el}${idx}`} className={style.li}>
                  <div className={style.info}>
                    <div className={style["profile-img"]}></div>
                    <span>{el}</span>
                  </div>
                  <Button text={"수락"} clickHandler={async () => {
                    console.log(`${el}의 요청을 수락!`);
                    try {
                      const response = await fetch(`http://home.iubns.net:8080/api/friend/${encodeURIComponent(el)}`, {
                        method : "PUT",
                        credentials : "include"
                      })
                      getFriends() // 요청을 수락 > "요청목록"에서 "친구목록"으로 옮겨진거 반영되게
                    }catch(err) {
                      console.error(err)
                      console.log(`${el} 요청 수락 실패!`);
                      alert(`${el} 요청 수락 실패!`)
                    }
                  }}/>
                </li>
              )
            })}
          </ul>
        }
        <h2>내가 보낸 요청</h2>
        {friends.waitingFriends?.length == 0 ? 
          <h3>보낸 요청 없음</h3> 
          : 
          <ul>
            {friends.waitingFriends?.map((el,idx) => {
              return (
              <li key={`${el}${idx}`} className={style.li}>
                <div className={style.info}>
                  <div className={style["profile-img"]}></div>
                  <span>{el}</span>
                </div>
              </li>
              )
            })}
          </ul>
        }
      </div>
      <FooterNav/>
    </>
  )
}
export default FriendsListPage