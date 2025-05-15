import mainstyles from "../css/main.module.css";
function Chatbox({ Chat }) {
  return <main>
    <div className={mainstyles["chat-box"]}>
      <div className={mainstyles["message"]}>
        <div className={mainstyles["user"]}>멋사 프론트엔드 홍지연</div>
        <div className={mainstyles["text"]}>안녕하세요!</div>
      </div>
      <div className={mainstyles["my"] + ' ' + mainstyles["message"]}>
        <div className={mainstyles["my"] + ' ' + mainstyles["text"]}>처음뵙겠습니다!</div>
      </div>
      <div className={mainstyles["message"]}>
        <div className={mainstyles["user"]}>멋사 운영진 조건희</div>
        <div className={mainstyles["text"]}>반갑습니다!</div>
      </div>
      <div className={mainstyles["message"]}>
        <div className={mainstyles["user"]}>멋사 운영진 이은정</div>
        <div className={mainstyles["text"]}>만나서 반가워요 여러분!</div>
      </div>
      <div className={mainstyles["message"]}>
        <div className={mainstyles["user"]}>멋사 백엔드 김재환</div>
        <div className={mainstyles["text"]}>저희 잘해봐요!</div>
      </div>
      <div className={mainstyles["message"]}>
        <div className={mainstyles["user"]}>멋사 백엔드 재빈</div>
        <div className={mainstyles["text"]}>열심히 해보겠습니다!</div>
      </div>
      <div className={mainstyles["message"]}>
        <div className={mainstyles["user"]}>멋사 운영진 조건희</div>
        <div className={mainstyles["text"]}>저희 회의는 언제가 좋을까요?</div>
      </div>
      <div className={mainstyles["my"] + ' ' + mainstyles["message"]}>
        <div className={mainstyles["my"] + ' ' + mainstyles["text"]}>오늘은 어떠세요??</div>
      </div>
      <div className={mainstyles["message"]}>
        <div className={mainstyles["user"]}>멋사 운영진 이은정</div>
        <div className={mainstyles["text"]}>넵!! 좋아요!!</div>
      </div>

      {Chat.map((item) => (

        <div className={item.who === 'me' ? mainstyles["my"] + ' ' + mainstyles["message"] : mainstyles["message"]}>
          {
            (item.who !== "me") &&
             <div key={item.id} className={mainstyles["replyers1"]}>{item.who}</div>

          }
          <div key={item.id} className={item.who==='me'? mainstyles["my"]+' '+mainstyles["text"]:mainstyles["text"]}>{item.message}</div>
        </div>
      ))}
    </div>
  </main>
}

export default Chatbox



