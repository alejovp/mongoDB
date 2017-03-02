const express = require('express')
const router = express.Router()

// const getAll = require('./handlers/getAll')
const addTask = require('./handlers/addTask.js')
const renderTasks = require('./handlers/renderTasks.js')
const renderCompTasks = require('./handlers/renderCompTasks.js')

router.get('/', renderTasks)
router.post('/', addTask)
router.get('/completed', renderCompTasks)

module.exports = router
