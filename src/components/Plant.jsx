import React, { Component } from 'react';
import Timer from './Water';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';


const Plant = props => {
  const [submitted, setSubmitted] = useState(false);
  const [pls, setPls] = useState(null)
  function myfunc(e) {
    e.preventDefault();
    setPls(e.target.please.value)
    setSubmitted(true)
  }
  console.log(pls)
  return (
    <div className ='plantBox'>
    <div>Name: {props.name}</div>
    <div>Species: {props.species}</div>
    <div>Location: {props.location}</div>
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
      <form id={props.waterkee} onSubmit = {myfunc}>
        <input type='date' name='please' defaultValue="2023-04-06" min="2023-04-06" max="2024-04-06"/>
        <input type='submit' value='set watering'></input>
      </form>
      {submitted === true && pls !== null && <Timer date={pls}/>}
    </span>
</div>
  )
}

export default Plant;