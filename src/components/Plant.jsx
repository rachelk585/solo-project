import React, { Component } from 'react';
import Timer from './Water';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';

const Plant = props => {
  const [submitted, setSubmitted] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (tm) => {
    // const time = count - Date.now(); //<- counting up\
    const countDown = tm - Date.now();

    setMinutes(Math.floor(((countDown / 1000) / 60) % 60));
    setSeconds(Math.floor((countDown / 1000) % 60));

    if(countDown < 0){
      console.log(variable)
      setSubmitted(false);
      document.getElementById(`${props.waterkee}`).hidden = false;
      clearInterval(variable)
    }
  };

  let variable;

  function myfunc(e) {
    e.preventDefault();
    const time = Date.parse(e.target.please.value);
    setSubmitted(true)
    variable = setInterval(() => getTime(time), 1000);
  }

  return (
    <div className ='plantBox'>
    <div><span className='category'>Name:</span><span> {props.name}</span></div>
    <div><span className='category'>Species:</span><span> {props.species}</span></div>
    <div><span className='category'>Location:</span><span> {props.location}</span></div>
    {/* <div>{props.name} {props.message}</div> */}
    <span>
      <button className="plantBoxBtn" onClick={() => {
        let hiddenForm = document.getElementById(`${props.kee}`);
        hiddenForm.hidden = false
        }}>Update Plant</button>
      <form id={props.kee} onSubmit = {props.updatePlant} hidden={true}>
          <input className='plantUpdateForm' name="name" type="text" defaultValue={props.name}></input>
          <input className='plantUpdateForm' name="species" type="text" defaultValue={props.species}></input>
          <input className='plantUpdateForm' name="location" type="text" defaultValue={props.location}></input>
          <input className='plantUpdateForm' name="id" type="text" defaultValue={props.id} hidden={true}></input>
          <input className='plantUpdateForm' name="key" type="text" defaultValue={props.kee} hidden={true}></input>
          <input className='plantUpdateBtn'type="submit" value="Update Plant"></input>
        </form>
      <button className="plantBoxBtn" onClick={() => props.deletePlant(props.id, props.kee)}>Compost Plant</button>
      <form className='wateringform' onSubmit = {myfunc}>
        <input className="watering" type='datetime-local' name='please' defaultValue="2023-04-06T12:00" min="2023-04-06T7:00" max="2024-04-05T12:00"/>
        <input className="setwatering" type='submit' value='Set Next Water Date'></input>
      </form>
      {submitted === true && <Timer minutes={minutes} seconds={seconds}/>}
      <div id={props.waterkee} hidden={true}>
        <p className="waterMessage">
          {props.name} needs to be watered!
        </p>
        <button className="plantBoxBtn" onClick={() => {
        let hiddenMsg = document.getElementById(`${props.waterkee}`);
        hiddenMsg.hidden = true;
        }}>
          I've watered!
        </button>
      </div>
    </span>
</div>
  )



  
}

export default Plant;