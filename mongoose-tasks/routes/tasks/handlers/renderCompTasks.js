const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const section = 'Here you can see all your completed tasks!'
  const user = req.user
  Task.find()
    .then(tasks => {
      res.render('completedTasks', { tasks, section, user })
      // console.log(tasks)
    })
    .catch(err => { throw err })
}
