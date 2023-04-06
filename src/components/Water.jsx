import React from 'react';
import { useState, useEffect } from 'react';
import { redirect } from 'react-router';
import ReactDOM from 'react-dom'

const Timer = (props) => {
  //these should all be in plant and then prop drilled down so we can unmount it in plant
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

    if(time < 0){
      setSeconds('done')
      //update the database? :,)
      // window.location.reload(false)

    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(newVar), 1000);

    return () => clearInterval(interval);
  }, []);
////////////////////////////////////////////////////////////////////
  return (
    <div className="timer" id='timer'>
      <div className="box">
        <p id="minute">{minutes < 10 ? "0" + minutes : minutes} Minutes {seconds < 10 ? "0" + seconds : seconds} Seconds</p>
      </div>
    </div>
  );
};

export default Timer;