'use client';

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  // 친구 목록을 배열로 저장 (하드 코딩으로 작성, 다음 이름은 AI가 제공한 예시입니다.)
  const friends = ["정예린", "박도윤", "이하준", "김소민", "최시우", "한지후"];

  return (
    // 전체 채팅 컨테이너로 기존 채팅창 스타일 사용
    <div className={styles["chat-container"]}>

      {/* 채팅 헤더 부분 */}
      <div className={styles["chat-header"]}>
        <div className={styles.profile}>
          <span>친구 목록</span>
        </div>
      </div>

      {/* 채팅 메시지 부분 */}
      <div className={styles["chat-messages"]}>
        <div className={styles["friend-list"]}>

          {/* 친구 목록을 map으로 출력 */}
          {friends.map((name, index) => (
            <div
              key={index}
              className={styles["friend-button"]}
              onClick={() =>
                router.push(`/chat/${index}?name=${encodeURIComponent(name)}`)
              }
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}