const express = require('express')
const router = express.Router()

const removeTask = require('./handlers/removeTask.js')
const updateTask = require('./handlers/updateTask.js')

router.delete('/:id', removeTask)
router.put('/:id', updateTask)

module.exports = router
