const Client = require('../../../models/Client')

module.exports = (req, res) => {
  const section = 'Clients List'
  Client.find()
    .then(clients => {
      res.render('clients', { clients, section })
      console.log(clients)
    })
    .catch(err => { throw err })
}
