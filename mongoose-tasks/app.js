const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = 3000
const app = express()

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')
const urlDB = 'mongodb://localhost:27017/test'

mongoose.connect(urlDB)
mongoose.Promise = global.Promise

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const section = 'Home'
  res.render('home', {section})
})

// Authorization part
const authRouter = require('./routes/auth')

app.use(authRouter)

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) return next()
  console.log(req.isAuthenticated())
  res.redirect('/')
}
//

app.use('/tasks', isLoggedIn, routerTasks)
app.use('/task', isLoggedIn, routerTask)

app.listen(PORT, () =>
  console.log(`💼 Tasks Server running at PORT ${PORT}...`))
