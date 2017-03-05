const mongoose = require('mongoose')
const collection = 'tasks'

const TaskSchema = new mongoose.Schema({
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  title: String,
  description: String,
  done: Boolean,
  createdAt: Number,
  modifiedAt: Number,
  user_id: String
}, { collection })

module.exports = mongoose.model('Task', TaskSchema)
