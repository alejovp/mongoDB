const Client = require('../../../models/Client')

module.exports = (req, res) => {
  const { id } = req.params

  Client.findById(id)
    .then(client => res.json(client))
    .catch(err => { throw err })
}
