const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const { title } = req.body
  const done = false
  const createdAt = Date.now()
  // const modifiedAt = '---'
  const task = new Task({ title, done, createdAt })
  console.log(task)
  task.save()
    .then(() => {
      res.redirect('/tasks')
    })
}
