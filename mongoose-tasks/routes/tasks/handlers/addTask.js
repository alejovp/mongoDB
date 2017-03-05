const Task = require('../../../models/Task.js')

module.exports = (req, res) => {
  const { title, description } = req.body
  const user_id = req.user.id
  const done = false
  const createdAt = Date.now()
  // const modifiedAt = '---'
  const task = new Task({ title, description, done, createdAt, user_id })
  task.save()
    .then(() => {
      res.redirect('/tasks')
    })
}
