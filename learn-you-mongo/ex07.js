const MongoClient = require('mongodb').MongoClient
const db = process.argv[2]
const collectionName = process.argv[3]
const id = process.argv[4]
const url = `mongodb://localhost:27017/${db}`

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  const collection = db.collection(collectionName)
  collection.remove(
    {_id: {$eq: id}},
    (err, result) => {
      if (err) throw err
      console.log('Removed done well')
    }
  )
  db.close()
})
