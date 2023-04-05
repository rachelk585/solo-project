const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true, unique: true },
  species: { type: String, required: true },
  location: { type: String, required: true }
})

module.exports = mongoose.model('Plant', plantSchema)