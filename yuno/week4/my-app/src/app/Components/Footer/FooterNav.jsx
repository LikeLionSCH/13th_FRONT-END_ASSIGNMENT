import Link from "next/link"

import style from "./FooterNav.module.css"

const FooterNav = () => {
  return (
    <nav className={style["nav-bar"]}>
      <ul className={style.ul}>
        <li>
          <Link href="/friends-list">
            <span className={`material-symbols-outlined`}>group</span>
          </Link>
        </li>
        <li>
          <Link href="/chat-list">
            <span className={`material-symbols-outlined`}>chat</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNav