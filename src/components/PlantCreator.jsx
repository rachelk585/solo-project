import React, { Component } from 'react';

const PlantCreator = props => {
  return (
    <div>
        <h3> Create a New Plant </h3>
        {/* <form method='POST' action='/plants'> */}
        <form onSubmit = {props.handleSubmit} id="plantCreator">
          <input className="createBox" name="name" type="text" placeholder="name"></input>
          <input className="createBox" name="species" type="text" placeholder="species"></input>
          <input className="createBox" name="location" type="text" placeholder="location"></input>
          <input className='createplantbtn' type="submit" value="Create Plant"></input>
        </form>
    </div>
  )
}

export default PlantCreator;