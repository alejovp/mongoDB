const mongoose = require('mongoose')
const collection = 'clients'

const ClientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: Number,
  address: String,
  profession: String
}, { collection })

module.exports = mongoose.model('Client', ClientSchema)
