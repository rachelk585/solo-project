import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import PlantDisplay from './components/PlantDisplay';
import PlantCreator from './components/PlantCreator';
import { useState, useEffect } from 'react'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      plantList : [],
      message: ' is hydrated!'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePlant = this.updatePlant.bind(this);
    this.deletePlant = this.deletePlant.bind(this);
  }

  componentDidMount(){
    console.log('Mounted')
    fetch('/plants', {method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
      this.setState({...this.state,
        plantList: data
      });
    })
    .catch(err => console.log('mount fetching error', err))
  };

  handleSubmit(event) {
    event.preventDefault();
    fetch('/plants', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
      name: event.target.name.value,
      species: event.target.species.value,
      location: event.target.location.value
    })})
    .then((res) => res.json())
    .then((data) => {
      let plantList = this.state.plantList;
      plantList.push(data);
      this.setState({
        plantList:plantList,
      })
    })
    .catch((err) => console.log('handlesubmit error', err))
  }

  deletePlant(data, key) {
    fetch('/plants', {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: data})})
    .then((res) => res.json())
    .then((data) => {
      let plantList = this.state.plantList;
      plantList.splice(key, 1)
      this.setState({
        plantList:plantList,
      })
    })
  }

  updatePlant(event) {
    event.preventDefault();
    event.target.hidden = true;
    fetch('/plants', {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
      name: event.target.name.value,
      species: event.target.species.value,
      location: event.target.location.value,
      id: event.target.id.value
    })})
    .then((res) => res.json())
    .then((data) => {
      let plantList = this.state.plantList;
      plantList[event.target.key.value] = data;
      this.setState({...this.state,
        plantList: plantList
      })
    })
  }

  render() {
    return (
      <div className='main'>
        <h1> Plant Buddy </h1>
        <PlantDisplay plantList={this.state.plantList} deletePlant={this.deletePlant} updatePlant={this.updatePlant}/>
        <PlantCreator handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

export default App;