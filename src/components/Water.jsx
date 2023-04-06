import React from 'react';
import { useState, useEffect } from 'react';
import { redirect } from 'react-router';
import ReactDOM from 'react-dom'

const Timer = (props) => {
  


  return (
    <div className="timer" id='timer'>
      <div className="box">
        <p id="minute">{props.minutes < 10 ? "0" + props.minutes : props.minutes} Minutes {props.seconds < 10 ? "0" + props.seconds : props.seconds} Seconds Until Next Water</p>
      </div>
    </div>
  );
};

export default Timer;