import { useEffect, useRef, useState } from "react";

export const Timer = ({ timerInfo }) => {
  const [minutes, setMinutes] = useState(timerInfo.minutes);
  const [seconds, setSeconds] = useState(timerInfo.seconds);
  const [remainTimeInfo, setRemainTimeInfo] = useState("");
  const audioRef = useRef(null);

  let updateTime = null;

  const startUpdateTime = () => {
    updateTime = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes == 0) {
          clearInterval(updateTime);
          // audioRef.current.play();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
  };

  useEffect(() => {
    console.log("Timer started", minutes, seconds);
    updateTime = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes == 0) {
          clearInterval(updateTime);
          audioRef.current.play();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(updateTime);
    };
  }, [seconds]);

  const initiateTime = () => {
    setMinutes(timerInfo.minutes);
    setSeconds(timerInfo.seconds);
  };

  return (
    <div
      className="timer-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        border: "1px solid white",
        borderRadius: "16px",
        padding: "8px 16px 12px",
      }}
    >
      <div className="timer-name">{timerInfo.name}</div>
      <div className="time-wrapper" style={{ display: "flex", gap: "4px" }}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <audio ref={audioRef} src="/calm-music-64526.mp3" />
      <div
        className="timer-controll-wrapper"
        style={{ display: "flex", gap: "8px" }}
      >
        <button onClick={startUpdateTime}>START</button>
        <button
          onClick={() => {
            clearInterval(updateTime);
          }}
        >
          STOP
        </button>
        <button onClick={initiateTime}>AGAIN</button>
      </div>
    </div>
  );
};
