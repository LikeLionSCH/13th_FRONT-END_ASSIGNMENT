import headerstyles from "../css/header.module.css";
function Header(){
    return <header>
    <div className={headerstyles["info-bar"]}>
      <div className={headerstyles["info-bar__time"]}>20:55</div>
      <div className={headerstyles["info-bar__icons"]}>
        <img src="assets/chart-bar.svg" alt="차트바" />
        <img src="assets/wifi.svg" alt="와이파이" />
        <img src="assets/battery.svg" alt="배터리" />
      </div>
    </div>
  
    <div className={headerstyles["menu-bar"]}>
      <div className={headerstyles["out__icons"]}>
        <img src="assets/out.svg" alt="나가기" />
      </div>
      <div className={headerstyles["num"]}>13</div>
        <div className={headerstyles["name"]}>멋사 프로젝트 팀</div>
      <div className={headerstyles["search__icons"]}>
        <img src="assets/search.svg" alt="돋보기" />
      </div>
      <div className={headerstyles["menu__icons"]}>
        <img src="assets/menu.svg" alt="메뉴" />
      </div>
    </div>
  </header>
  }
  
  export default Header