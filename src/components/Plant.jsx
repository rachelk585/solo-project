import React, { Component } from 'react';
import Timer from './Water';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';

const Plant = props => {
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(null)
  const [timerOut, settimerOut] = useState(false)

  //if {props.message === jsatledkjatkle then unhide the water me button? on click change back to well watered}

  function myfunc(e) {
    e.preventDefault();
    setCount(e.target.please.value)
    setSubmitted(true)
  }

  return (
    <div className ='plantBox'>
    <div>Name: {props.name}</div>
    <div>Species: {props.species}</div>
    <div>Location: {props.location}</div>
    {/* <div>{props.name} {props.message}</div> */}
    <span>
      <button className="update" hidden={false} onClick={() => {
        let hiddenForm = document.getElementById(`${props.kee}`);
        hiddenForm.hidden = false
        }}>Update Plant</button>
      <form id={props.kee} onSubmit = {props.updatePlant} hidden={true}>
          <input name="name" type="text" defaultValue={props.name}></input>
          <input name="species" type="text" defaultValue={props.species}></input>
          <input name="location" type="text" defaultValue={props.location}></input>
          <input name="id" type="text" defaultValue={props.id} hidden={true}></input>
          <input name="key" type="text" defaultValue={props.kee} hidden={true}></input>
          <input type="submit" value="update plant"></input>
        </form>
      <button onClick={() => props.deletePlant(props.id, props.kee)}>Compost Plant</button>
      <form onSubmit = {myfunc}>
        <input type='datetime-local' name='please' defaultValue="2023-04-05T12:00" min="2023-04-05T12:00" max="2024-04-05T12:00"/>
        <input type='submit' value='set watering'></input>
      </form>
      {submitted === true && count !== null && <Timer date={count}/>}
    </span>
</div>
  )
}

export default Plant;