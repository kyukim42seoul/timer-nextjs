"use client";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTimerForm = ({ setIsOpen, setPresetTimerList }) => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const [valueD, setValueD] = useState("");
  const cursorRef = useRef(null);

  useEffect(() => {
    cursorRef.current.focus();
  }, []);

  const catchEnter = (event) => {
    if (event.key === "Enter") {
      console.log("Enter Pressed");
    }
    if (event.key == "Enter" && valueA && valueB && valueC) {
      console.log("Input complete", valueA, valueB, valueC);
      // 새 타이머 생성
      setPresetTimerList((prev) => {
        const newId = uuidv4();
        const newTimer = {
          id: newId,
          minutes: valueA,
          seconds: valueB,
          name: valueC,
          sound: valueD,
        };
        return [...prev, newTimer];
      });
      setValueA("");
      setValueB("");
      setValueC("");
      setIsOpen(false);
    }
  };

  const getValue = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <div className="add-timer-form-wrapper">
      <form
        onSubmit={() => {
          setIsOpen(false);
        }}
      >
        <input
          onKeyDown={catchEnter}
          onChange={(e) => getValue(e, setValueA)}
          value={valueA}
          placeholder="set minutes"
          ref={cursorRef}
        />
        <input
          onKeyDown={catchEnter}
          onChange={(e) => getValue(e, setValueB)}
          value={valueB}
          placeholder="set seconds"
        />
        <input
          onKeyDown={catchEnter}
          onChange={(e) => getValue(e, setValueC)}
          value={valueC}
          placeholder="set timer name"
        />
      </form>
    </div>
  );
};
