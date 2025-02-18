"use client";

import { useState } from "react";
import styles from "./page.module.css"; // CSS Module 사용

// 숫자 버튼
function NumButton({ value, onClick }) {
  return (
    <div className={styles.num_buttons} onClick={() => onClick(value)}>
      {value}
    </div>
  );
}

// 연산자 버튼
function OpButton({ value, onClick }) {
  return (
    <div className={styles.op_buttons} onClick={() => onClick(value)}>
      {value}
    </div>
  );
}

export default function Calculator() {
  const [display, setDisplay] = useState(""); // 현재 화면에 표시될 값
  const [firstValue, setFirstValue] = useState(null); // 첫 번째 숫자 저장
  const [operator, setOperator] = useState(null); // 현재 연산자
  const [waitingForSecond, setWaitingForSecond] = useState(false); // 두 번째 숫자 입력 여부

  // 계산 함수
  function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    if (isNaN(num2)) return num1; // 두 번째 값이 없으면 첫 번째 값 유지

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error"; // 0으로 나누기 방지
      default:
        return second;
    }
  }

  // AC 초기화
  function handleClearClick() {
    setDisplay("");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  }

  // = 값 출력 
  function handleEqualsClick() {
    if (firstValue == null || operator === null) return;
    
    const result = calculate(firstValue, display, operator);
    setDisplay(result.toString());
    setFirstValue(result);
    setOperator(null);
    setWaitingForSecond(false);
  }

  // 숫자 입력 처리
  function handleNumClick(value) {
    if (waitingForSecond) {
      setDisplay(value);
      setWaitingForSecond(false);
    } else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  }

  // 연산자 버튼 클릭 처리
  function handleOpClick(value) {
    if (firstValue === null) {
      setFirstValue(display);
    } else if (!waitingForSecond) {
      const result = calculate(firstValue, display, operator);
      setFirstValue(result);
      setDisplay(result.toString());
    }
    setOperator(value);
    setWaitingForSecond(true);
  }

  return (
    <div className={styles.calc}>
      <div className={styles.display}>{display}</div>
      <div className={styles.buttons_tool}>
        <div style={{ display: "flex" }}>
          <NumButton value="." onClick={handleNumClick} />
          <OpButton value="AC" onClick={handleClearClick} />
          <OpButton value="=" onClick={handleEqualsClick} />
          <OpButton value="/" onClick={handleOpClick} />
        </div>
        <div style={{ display: "flex" }}>
          <NumButton value="7" onClick={handleNumClick} />
          <NumButton value="8" onClick={handleNumClick} />
          <NumButton value="9" onClick={handleNumClick} />
          <OpButton value="*" onClick={handleOpClick} />
        </div>
        <div style={{ display: "flex" }}>
          <NumButton value="4" onClick={handleNumClick} />
          <NumButton value="5" onClick={handleNumClick} />
          <NumButton value="6" onClick={handleNumClick} />
          <OpButton value="-" onClick={handleOpClick} />
        </div>
        <div style={{ display: "flex" }}>
          <NumButton value="1" onClick={handleNumClick} />
          <NumButton value="2" onClick={handleNumClick} />
          <NumButton value="3" onClick={handleNumClick} />
          <OpButton value="+" onClick={handleOpClick} />
        </div>
        <div style={{ display: "flex" }}>
          <NumButton value="&nbsp;" />
          <NumButton value="0" onClick={handleNumClick} />
          <NumButton value="&nbsp;" />
        </div>
      </div>
    </div>
  );
}
