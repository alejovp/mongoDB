const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const section = 'Tasks List'
  const user = req.user
  Task.find()
    .then(tasks => {
      res.render('tasks', { tasks, section, user })
    })
    .catch(err => { throw err })
}
