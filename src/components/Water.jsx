
import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //passed down
  const newVar = props.date;

  const getTime = () => {
    const time = Date.parse(newVar) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(newVar), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer">
    <div className="col-4">
      <div className="box">
        <p id="day">{days < 10 ? "0" + days : days}</p>
        <span className="text">Days</span>
      </div>
    </div>
    <div className="col-4">
      <div className="box">
        <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        <span className="text">Hours</span>
      </div>
    </div>
    <div className="col-4">
      <div className="box">
        <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        <span className="text">Minutes</span>
      </div>
    </div>
    <div className="col-4">
      <div className="box">
        <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        <span className="text">Seconds</span>
      </div>
    </div>
  </div>
  );
};

export default Timer;