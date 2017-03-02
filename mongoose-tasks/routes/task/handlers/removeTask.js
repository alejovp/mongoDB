const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then((task) => {
      // console.log(`Task has been removed`)
      // res.redirect('/tasks')
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json(err))
}
