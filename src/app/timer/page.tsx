"use client";

import { useState } from "react";
import { AddTimerForm } from "./components/AddTimerForm";
import { Timer } from "./components/Timer";
import Head from "next/head";

const TimerPage = () => {
  const [presetTimerList, setPresetTimerList] = useState([
    {
      id: "",
      minutes: "",
      seconds: "",
      name: "",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
    setPresetTimerList((prev) => {
      return [...prev];
    });
  };

  return (
    <div>
      <Head>
        <title>My Timer</title>
      </Head>
      <div className="util-wrapper">
        <button onClick={onClickHandler}>ADD</button>
      </div>
      {isOpen ? (
        <AddTimerForm
          setIsOpen={setIsOpen}
          setPresetTimerList={setPresetTimerList}
        />
      ) : null}
      <div
        className="timer-list-container"
        style={{ display: "flex", gap: "16px" }}
      >
        {presetTimerList.map((timerInfo, index) => {
          if (index == 0) return null;
          return <Timer key={timerInfo.id} timerInfo={timerInfo} />;
        })}
      </div>
      <div className="rights-wrapper">
        Sound Effect from{" "}
        <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=64526">
          <h3>Pixabay</h3>
        </a>
      </div>
    </div>
  );
};

export default TimerPage;
