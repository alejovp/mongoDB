const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  console.log(`Succesfully connected to DB=${db.s.databaseName}`)

  db.collection('restaurants')
    .find({'borough': 'Manhattan'})
    .count((err, count) => console.log(count))
    // .limit(100)
    // .toArray((err, docs) => console.log(docs))
  db.close()
})
