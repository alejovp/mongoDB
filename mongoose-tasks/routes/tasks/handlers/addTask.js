const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const { title } = req.body
  const user_id = req.user.id
  const done = false
  const createdAt = Date.now()
  // const modifiedAt = '---'
  const task = new Task({ title, done, createdAt, user_id })
  task.save()
    .then(() => {
      res.redirect('/tasks')
    })
}
