import style from "./AddFriendModal.module.css"
import Button from "../../Button/Button"
import { useState } from "react"
const AddFriendModal = ({ setIsOpen, getFriends }) => {
  const [name, setName] = useState("")

  const changeHandler = e => {
    setName(e.target.value)
  }

  const submitHandler = async e => {
    e.preventDefault()
    console.log(name);
    try {
      const response = await fetch(`http://home.iubns.net:8080/api/friend/${encodeURIComponent(name)}`, {
        method : "POST",
        credentials : "include"
      })
    } catch(err) {
      console.error(err)
      console.log(`${name} 친구추가 실패`);
      alert(`${name} 친구추가 실패`)
    } finally {
      setIsOpen(prev => !prev)
      getFriends()
    }
  }

  return(
    <div className={style.window} onClick={e => {
      if(e.target == e.currentTarget)setIsOpen(prev => !prev)
    }}>
      <form className={style.modal} onSubmit={submitHandler}>
        <input type="text" placeholder="친구이름" onChange={changeHandler} value={name}/>
        <Button text={"친구추가"}/>
      </form>
    </div>
  )
}

export default AddFriendModal