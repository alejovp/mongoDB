const Client = require('../../../models/Client')

module.exports = (req, res) => {
  const { id } = req.params

  Client.findByIdAndRemove(id)
    .then(client => {
      console.log(`Client has been removed succesfully`)
      res.status(200).json(client)
    })
    .catch(err => res.status(500).json(err))
}
