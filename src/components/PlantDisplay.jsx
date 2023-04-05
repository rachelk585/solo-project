import React, { Component } from 'react';
import Plant from './Plant';

const PlantDisplay = props => {
  const plants = [];
  for (let i = 0; i < props.plantList.length; i++){
    plants.push(<Plant id={props.plantList[i]._id} name={props.plantList[i].name} species={props.plantList[i].species} location={props.plantList[i].location} deletePlant={props.deletePlant} updatePlant={props.updatePlant} setWater={props.setWater} key={i} kee={i} waterkee={i+10}/>)
  }
  return (
    <div>
        <h2> My Plants </h2>
        { plants }
    </div>
  )
}

export default PlantDisplay