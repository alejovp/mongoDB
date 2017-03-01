const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const url = 'mongodb://localhost:27017/test'
const PORT = 3000
const app = express()

MongoClient.connect(url)
  .then(db => {
    console.log('Succesfully connected to DB...')

    app.use((req, res, next) => {
      const { limit, page = 1 } = req.query
      req.limit = +limit
      // Page = Number of documents to skip between urls
      req.skipResults = (+page - 1) * limit
      next()
    })

    app.use((req, res, next) => {
      const { hide, show } = req.query
      const projection = {}

      if (show) {
        const fields = show.split(',')
        fields.forEach(prop => {
          projection[prop] = 1
        })
      }

      if (hide) {
        const fields = hide.split(',')
        fields.forEach(prop => {
          projection[prop] = 0
        })
      }

      req.projection = projection
      next()
    })

    app.get('/restaurants', (req, res) => {
      const { limit, skipResults, projection } = req

      db.collection('restaurants')
        .find({}, projection)
        .limit(limit)
        .skip(skipResults)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })

    // /restaurants/borough/Manhattan
    app.get('/restaurants/borough/:borough', (req, res) => {
      const { limit, skipResults, projection } = req
      const { borough } = req.params

      db.collection('restaurants')
        .find({ borough }, projection)
        .limit(limit)
        .skip(skipResults)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })

    app.get('/restaurants/cuisine/:cuisine', (req, res) => {
      const { limit, skipResults, projection } = req
      const { cuisine } = req.params

      db.collection('restaurants')
        .find({ cuisine }, projection)
        .limit(limit)
        .skip(skipResults)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })

    app.get('/restaurants/cuisine/not/:cuisine', (req, res) => {
      const { limit, skipResults, projection } = req
      const { cuisine } = req.params

      db.collection('restaurants')
        .find({ cuisine: {$ne: cuisine} }, projection)
        .limit(limit)
        .skip(skipResults)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })

    app.get('/restaurant/:id', (req, res) => {
      const { projection } = req
      const { id } = req.params

      db.collection('restaurants')
        .find({_id: ObjectId(id)}, projection)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })
  })
  .catch(err => {
    throw err
  })

app.listen(PORT, () => console.log(`🚀 Magic happens on PORT ${PORT}`))
