const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = 3000
const app = express()

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')
const routerClients = require('./routes/clients')
const routerClient = require('./routes/client')
const urlDB = 'mongodb://localhost:27017/test'

mongoose.connect(urlDB)
mongoose.Promise = global.Promise

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/tasks', routerTasks)
app.use('/task', routerTask)
app.use('/clients', routerClients)
app.use('/client', routerClient)

app.listen(PORT, () =>
  console.log(`💼 Tasks Server running at PORT ${PORT}...`))
