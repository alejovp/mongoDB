const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const section = 'Tasks List'
  Task.find()
    .then(tasks => {
      res.render('tasks', { tasks, section })
      console.log(tasks)
    })
    .catch(err => { throw err })
}
