const MongoClient = require('mongodb').MongoClient
const size = +process.argv[2]
const url = 'mongodb://localhost:27017/learnyoumongo'

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  const collection = db.collection('prices')
  collection.aggregate([
    {$match: {size: {$eq: size}}},
    {$group: {
      $sum: '$value'
    }}
  ])
  .toArray(function (err, results) {
    if (err) throw err
    console.log(results)
  })
  db.close()
})
