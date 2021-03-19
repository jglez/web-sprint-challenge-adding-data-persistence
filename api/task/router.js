// build your `/api/tasks` router here

const express = require('express')

const router = express.Router()

// Tasks Model
const Task = require('./model.js')

/***** TASKS ENDPOINTS *****/

router.get('/', (req, res) => {
  Task.getAll()
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
  Task.insert(req.body)
    .then(newTask => {
      res.status(200).json(newTask)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// Expose our router to other files
module.exports = router

