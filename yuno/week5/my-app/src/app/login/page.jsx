// '/login' 페이지
'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import style from "./LoginPage.module.css"
import Button from "../Components/Button/Button"


const LoginPage = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const idHandler = e => setId(e.target.value)

  const pwHandler = e => setPassword(e.target.value)

  const submitHandler = async e => {
    e.preventDefault()
    // console.log(id, password);
    try {
      const response = await fetch("http://home.iubns.net:8080/login", {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username : id,
          password
        })
      })
      router.push('/friends-list')
    } catch(err) {
      console.error(err)
      console.log('로그인에 실패했어요');
      alert("로그인 실패!")
    }
  }
  return (
    <form className={style.wrap} onSubmit={submitHandler}>
      <div className={style.inputs}>
        <input type="text" placeholder="아이디" value={id} onChange={idHandler}/>
        <input type="password" placeholder="비밀번호" value={password} onChange={pwHandler}/>
      </div>
      <div className={style.btns}>
        <Button text={"로그인"}/>
        <Link href="/sign-up">회원가입</Link>
      </div>
    </form>  
  )
}

export default LoginPage