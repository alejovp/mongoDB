const Client = require('../../../models/Client')

module.exports = (req, res) => {
  const { firstName, lastName, age, address, profession } = req.body
  const client = new Client({ firstName, lastName, age, address, profession })

  client.save()
    .then(client => {
      console.log('Client has been added succesfully')
      res.status(200).json(client)
    })
    .catch(err => res.status(500).json(err))
}
