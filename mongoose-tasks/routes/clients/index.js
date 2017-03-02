const express = require('express')
const router = express.Router()

// const getAll = require('./handlers/getAll')
const addClient = require('./handlers/addClient')
const renderClients = require('./handlers/renderClients')

router.get('/', renderClients)
router.post('/', addClient)

module.exports = router
