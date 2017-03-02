const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const section = 'Completed Tasks'
  Task.find()
    .then(tasks => {
      res.render('completedTasks', { tasks, section })
      // console.log(tasks)
    })
    .catch(err => { throw err })
}
