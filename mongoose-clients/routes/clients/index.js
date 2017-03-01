const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addClient = require('./handlers/addClient')

router.get('/', getAll)
router.post('/', addClient)

module.exports = router
