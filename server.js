//set this up later for connecting to database maybe and serving our css files
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const plantController = require('./controllers/PlantController');

dbconnect().catch(err => console.log(err));
async function dbconnect() {
  await mongoose.connect('mongodb://localhost/mydb')
  console.log('DB connected')
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static('src'))

app.get('/plants', plantController.getPlants, (req, res) => {
  console.log("got plants");
  res.status(200).json(res.locals.plants);
})

app.post('/plants', plantController.createPlant, (req, res) => {
  console.log("created new plant");
  res.status(200).json(res.locals.newplant);
})

app.delete('/plants', plantController.deletePlant, (req, res) => {
  console.log("deleted plant");
  res.status(200).json(res.locals.deletedplant)
})

app.patch('/plants', plantController.updatePlant, (req, res) => {
  console.log("updated plant");
  res.status(200).json(res.locals.updatedplant)
})

app.use((req, res) => res.status(404).send('cannot get page'))

app.listen(3000, () => {
  console.log('listening hi')
});

module.exports = app;