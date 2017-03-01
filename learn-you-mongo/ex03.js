const mongo = require('mongodb').MongoClient
const age = process.argv[2]

const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function (err, db) {
  if (err) throw err
  db.collection('parrots')
    .find({
      age: {$gt: +age}
    })
    .toArray(function (err, documents) {
      if (err) throw err
      console.log(documents)
    })
  db.close()
})
