"use client";

import { useState } from "react";
import styles from "./page.module.css"; 
import { useRouter } from "next/navigation";
import useServer from "./history/useServer"; 

function NumButton({ value, onClick }) {
  return (
    <div className={styles.num_buttons} onClick={() => onClick(value)}>
      {value}
    </div>
  );
}

function OpButton({ value, onClick }) {
  return (
    <div className={styles.op_buttons} onClick={() => onClick(value)}>
      {value}
    </div>
  );
}

export default function Calculator() {
  const [display, setDisplay] = useState(""); 
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  
  const { postHistory } = useServer();  
  const { push } = useRouter();

  function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    if (isNaN(num2)) return num1;

    switch (operator) {
      case "+": return num1 + num2;
      case "-": return num1 - num2;
      case "*": return num1 * num2;
      case "/": return num2 !== 0 ? num1 / num2 : "Error";
      default: return second;
    }
  }

  function handleClearClick() {
    setDisplay("");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  }

  function handleEqualsClick() {
    if (firstValue == null || operator === null) return;
  
    const result = calculate(firstValue, display, operator);
    setDisplay(result.toString());
    setFirstValue(result);
    setOperator(null);
    setWaitingForSecond(false);
  
    const expression = `${firstValue} ${operator} ${display} = ${result}`;
    console.log("📌 전송할 데이터:", expression);
    postHistory(expression);
    
  }
  
  
  function handleNumClick(value) {
    if (waitingForSecond) {
      setDisplay(value);
      setWaitingForSecond(false);
    } else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  }

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

  function goToHistoryPage() {
    push("/history");
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
      <button onClick={goToHistoryPage}>페이지 이동</button>
    </div>
  );
}
