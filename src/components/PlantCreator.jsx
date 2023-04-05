import React, { Component } from 'react';

const PlantCreator = props => {
  return (
    <div>
        <h3> Create a new Plant </h3>
        {/* <form method='POST' action='/plants'> */}
        <form onSubmit = {props.handleSubmit}>
          <input name="name" type="text" placeholder="name"></input>
          <input name="species" type="text" placeholder="species"></input>
          <input name="location" type="text" placeholder="location"></input>
          <input type="submit" value="create plant"></input>
        </form>
    </div>
  )
}

export default PlantCreator;