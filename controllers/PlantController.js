const Plant = require('../models/PlantModel');

const plantController = {};

plantController.getPlants = (req, res, next) => {
  Plant.find({})
  .then((plants) => {
    res.locals.plants = plants;
      return next()
  })
  .catch((err) => {
    return next({
      method: 'getPlants',
      type: 'getting plants from mongoDB data',
      err,
    });
  });
}

plantController.createPlant = (req, res, next) => {
  const { name, species, location } = req.body;
  const newPlant = new Plant({ name, species, location });
  newPlant.save()
  .then((data) => {
    res.locals.newplant = data;
    return next();
  })
  .catch((err) => {
    return next({
      method: 'createPlant',
      type: 'adding new plant to mongoDB data',
      err,
    });
  });
}

plantController.deletePlant = (req, res, next) => {
  const { id } = req.body;
  Plant.findOneAndDelete({_id: id})
  .then((data) => {
    res.locals.deletedplant = data;
      return next()
  })
  .catch((err) => {
    return next({
      method: 'deletePlant',
      type: 'deleting plants from mongoDB data',
      err,
    });
  });
}

plantController.updatePlant = (req, res, next) => {
  const { name, species, location, id } = req.body;
  Plant.findOneAndUpdate({_id: id}, {name: name, species: species, location: location}, {new:true})
  .then((data) => {
    res.locals.updatedplant = data;
      return next()
  })
  .catch((err) => {
    return next({
      method: 'updatePlant',
      type: 'updating plants from mongoDB data',
      err,
    });
  });
}

module.exports = plantController