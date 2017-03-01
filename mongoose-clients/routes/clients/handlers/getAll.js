const Client = require('../../../models/Client')

module.exports = (req, res) => {
  Client.find()
    .then(clients => res.json(clients))
    .catch(err => { throw err })
}
