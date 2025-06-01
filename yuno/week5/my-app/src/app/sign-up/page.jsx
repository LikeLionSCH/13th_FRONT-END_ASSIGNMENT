// '/sign-up'페이지
'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import style from "../login/LoginPage.module.css"
import Button from "../Components/Button/Button"

const SignUpPage = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const idHandler = e => setId(e.target.value)

  const pwHandler = e => setPassword(e.target.value)

  const submitHandler = async e => {
    e.preventDefault()
    // console.log(id, password);
    try {
      const response = await fetch("http://home.iubns.net:8080/api/signup", {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username : id, 
          password
        })
      })
      router.push('/login')
    } catch(err) {
      console.error(err)
      console.log('회원가입실패!');
      // alert("회원가입 실패!")
    }
  }

  return (
    <form className={style.wrap} onSubmit={submitHandler}>
      <div className={style.inputs}>
        <input type="text" placeholder="아이디" value={id} onChange={idHandler}/>
        <input type="password" placeholder="비밀번호" value={password} onChange={pwHandler}/>
      </div>
      <div className={style.btns}>
        {/* <button className={style["login-btn"]}>login</button> */}
        <Button text={"회원 가입"}/>
      </div>
    </form>  
  )
}

export default SignUpPage