const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const section = 'Here you can see your pending task and also you will be able to add new ones!'
  const user = req.user
  Task.find()
    .then(tasks => {
      res.render('tasks', { tasks, section, user })
    })
    .catch(err => { throw err })
}
