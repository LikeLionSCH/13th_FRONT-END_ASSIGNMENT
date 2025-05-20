import FooterNav from "../Components/Footer/FooterNav"
import style from "./friendListPage.module.css"

const friends = [
  "Alice Kim",
  "Brian Lee",
  "Charlotte Park",
  "Daniel Choi",
  "Evelyn Jung",
  "Frank Han",
  "Grace Lim",
  "Henry Yoo",
  "Isabelle Kwon",
  "Jason Moon"
]

const FriendsListPage = () => {
  return (
    <>
      <h1>친구</h1>
      <ul className={style.ul}>
        {friends.map((friend, idx) => {
          return (
            <li key={`${friend}${idx}`} className={style.li}>
              <div className={style["profile-img"]}></div>
              <span>{friend}</span>
            </li>
          )
        })}
      </ul>
      <FooterNav/>
    </>
  )
}
export default FriendsListPage