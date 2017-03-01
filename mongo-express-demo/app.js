const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 3000

const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url)
  .then(db => {
    console.log('Succesfully connected to DB...')

    app.get('/restaurants', (req, res) => {
      const { limit = 10, fields } = req.query
      const projections = fields.split(',').reduce((proj, field) => {
        proj[field] = 1
        return proj
      }, {})

      db.collection('restaurants')
        .find(null, projections)
        .limit(+limit)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })
  })
  .catch(err => {
    throw err
  })

app.listen(PORT)
