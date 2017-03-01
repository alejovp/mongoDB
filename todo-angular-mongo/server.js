const express = require('express')
// var jsonServer = require('json-server')
// var server = jsonServer.create()
// var router = jsonServer.router('data/db.json')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const url = 'mongodb://localhost:27017/test'
const PORT = 3000

// var middlewares = jsonServer.defaults()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

MongoClient.connect(url)
  .then(db => {
    console.log('Succesfully connected to DB...')

    app.use(function (req, res, next) {
      if (req.method === 'POST') {
        req.body.createdAt = Date.now()
        req.body.done = false
      }

      next()
    })

    app.use(function (req, res, next) {
      if (req.method === 'PUT') {
        req.body.modifiedAt = Date.now()
        req.body.createdAt = +req.body.createdAt
        if (req.body.done) {
          req.body.done = req.body.done === 'true' ? true : false
        }
      }

      next()
    })

    app.get('/tasks', (req, res) => {
      db.collection('tasks')
        .find()
        .toArray((err, tasks) => {
          if (err) throw err
          res.json(tasks)
          console.log(tasks)
        })
    })

    app.post('/tasks', (req, res) => {
      const { title, done, createdAt } = req.body
      console.log(title)
      // tasks.push({task, date})
      // res.redirect('/')
      db.collection('tasks')
        .insert({title, done, createdAt})
        .then(res.redirect('/'))
    })
  })

// Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)

// Use default router
// server.use('/api/', router)
// server.use(app)

app.listen(3000, function () {
  console.log('Server is running')
})
