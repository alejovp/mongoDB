const Client = require('../../../models/Client')

module.exports = (req, res) => {
  const { id } = req.params

  let { firstName, lastName, age, address, profession } = req.body

  Client.findByIdAndUpdate(id, { firstName, lastName, age, address, profession })
    .then(client => {
      console.log('Client has been updated succesfully')
      res.status(200).json(client)
    })
    .catch(err => res.status(500).json(err))
}
