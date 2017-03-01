const MongoClient = require('mongodb').MongoClient
const db = process.argv[2]
const url = `mongodb://localhost:27017/${db}`

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  const users = db.collection('users')
  users.update(
    {name: {$eq: 'Tina'}},
    {$set: {age: 40}},
    (err, result) => {
      if (err) throw err
      console.log('Document was updated')
    })
  db.close()
})

