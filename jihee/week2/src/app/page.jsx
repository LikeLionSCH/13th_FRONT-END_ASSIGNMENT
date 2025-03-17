"use client"

import { useState } from "react";
import styles from "./page.module.css"

export default function Calculator() {
    const [display, setDisplay] = useState('0')
    const [firstNumber, setFirstNumber] = useState('0')
    const [selectedOperator, setSelectedOperator] = useState(null)
    const [isNewInput, setIsNewInput] = useState(false);
    const MAX_DISPLAY_LENGTH = 9;

    function handleNumberButtonClick(number) {
        if (isNewInput) {
            setDisplay(number.toString());
            setIsNewInput(false);
        } else {
            if (display.length >= MAX_DISPLAY_LENGTH) return;
            if (display === "0") {
                setDisplay(number)
                return
            }
            setDisplay(display + number.toString())
        }
    }

    function handleOperatorButtonClick(operator) {
        if (operator === "AC") {
            selectedACButton();
            return;
        }

        if (operator === "DE") {
            selectedDEButton();
            return;
        }

        if (["+", "-", "*", "/", "%"].includes(operator)) {
            setFirstNumber(display);
            setSelectedOperator(operator);
            setIsNewInput(true);
            return;
        }

        if (operator === "=") {
            if (!selectedOperator || firstNumber === "0") return;
            selectedEqualButton();
        }
    }

    function calc(operator, operand1, operand2) {
        switch (operator) {
            case "+": return operand1 + operand2
            case "-": return operand1 - operand2
            case "*": return operand1 * operand2
            case "/": return operand1 / operand2
            case "%": return operand1 / 100
        }
    }

    function handleDotButtonClick() {
        if (display.toString().indexOf(".") === -1) {
            setDisplay(`${display}.`)
        }
    }

    function selectedACButton() {
        setDisplay("0");
        setFirstNumber("0");
        setSelectedOperator(null);
        setIsNewInput(false);
    }

    function selectedEqualButton() {
        const operand1 = parseFloat(firstNumber);
        const operand2 = parseFloat(display);
        const result = calc(selectedOperator, operand1, operand2).toString();

        setDisplay(result.length > MAX_DISPLAY_LENGTH ? parseFloat(result.slice(0, MAX_DISPLAY_LENGTH)) : result);
        setFirstNumber(result);
        setSelectedOperator(null);
        setIsNewInput(true);
    }

    function selectedDEButton() {
        if (selectedOperator !== null) { // 연산자가 선택된 경우 아무것도 하지 않음
            return;
        }

        if (display.length === 1) {
            setDisplay("0");
        } else {
            setDisplay(display.slice(0, -1));
        }
    }

    return (
        <div className={styles.calculator}>
            <div className={styles["first-number"]}>
                {firstNumber !== "0" && selectedOperator && `${firstNumber} ${selectedOperator} ${isNewInput ? "" : display}`}
            </div>

            <div className={styles.display}>{display}</div>
            <div className={styles["button-area"]}>
                <div className={styles["button-row"]}>
                    <OperatorButton operator={"AC"} onClick={handleOperatorButtonClick} />
                    <OperatorButton operator={"DE"} onClick={handleOperatorButtonClick} />
                    <OperatorButton operator={"%"} onClick={handleOperatorButtonClick} />
                    <OperatorButton operator={"/"} onClick={handleOperatorButtonClick} />
                </div>
                <div className={styles["button-row"]}>
                    <NumberButton number={7} onClick={handleNumberButtonClick} />
                    <NumberButton number={8} onClick={handleNumberButtonClick} />
                    <NumberButton number={9} onClick={handleNumberButtonClick} />
                    <OperatorButton operator={"*"} onClick={handleOperatorButtonClick} />
                </div>
                <div className={styles["button-row"]}>
                    <NumberButton number={4} onClick={handleNumberButtonClick} />
                    <NumberButton number={5} onClick={handleNumberButtonClick} />
                    <NumberButton number={6} onClick={handleNumberButtonClick} />
                    <OperatorButton operator={"-"} onClick={handleOperatorButtonClick} />
                </div>
                <div className={styles["button-row"]}>
                    <NumberButton number={1} onClick={handleNumberButtonClick} />
                    <NumberButton number={2} onClick={handleNumberButtonClick} />
                    <NumberButton number={3} onClick={handleNumberButtonClick} />
                    <OperatorButton operator={"+"} onClick={handleOperatorButtonClick} />
                </div>
                <div className={styles["button-row"]}>
                    <div className={styles.button} onClick={handleDotButtonClick}>.</div>
                    <NumberButton number={0} onClick={handleNumberButtonClick} />
                    <OperatorButton operator={"="} onClick={handleOperatorButtonClick} />
                </div>
            </div>
        </div>
    );
}

function NumberButton({ number, onClick }) {
    function handleClick() {
        onClick(number)
    }
    return (
        <div className={styles.button} onClick={handleClick}>
            {number}
        </div>
    )
}

function OperatorButton({ operator, onClick }) {
    return (
        <div
            className={operator === "=" ? styles["button-equal"] : styles.button}
            onClick={() => onClick(operator)}
        >
            {operator}
        </div>
    );
}
