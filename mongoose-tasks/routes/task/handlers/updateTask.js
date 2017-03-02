const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const { id } = req.params
  const modifiedAt = Date.now()

  let { done } = req.body
  done = done === 'true' ? true : false

  Task.findByIdAndUpdate(id, { done, modifiedAt })
    .then(task => {
      console.log('Task has been updated succesfully')
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}
