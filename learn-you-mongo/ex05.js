const MongoClient = require('mongodb').MongoClient
const firstName = process.argv[2]
const lastName = process.argv[3]
const url = 'mongodb://localhost:27017/learnyoumongo'

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  const docs = db.collection('docs')
  const obj = {firstName: firstName, lastName: lastName}
  docs.insert(obj, (err, result) => {
    if (err) throw err
    console.log(JSON.stringify(obj))
  })
  db.close()
})

