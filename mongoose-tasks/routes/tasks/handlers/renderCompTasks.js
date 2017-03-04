const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const section = 'Completed Tasks'
  const user = req.user
  Task.find()
    .then(tasks => {
      res.render('completedTasks', { tasks, section, user })
      // console.log(tasks)
    })
    .catch(err => { throw err })
}
