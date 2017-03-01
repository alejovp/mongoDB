module.exports = function (db, req, res, not) {
  const { limit, skipResults, projection } = req
  const { cuisine } = req.params

  db.collection('restaurants')
      .find({ cuisine }, projection)
      .limit(limit)
      .skip(skipResults)
      .toArray((err, restaurants) => {
        res.json(restaurants)
      })
}
