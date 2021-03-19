// build your `/api/projects` router here
const express = require('express')

const router = express.Router()

// Resourses Model
const Project = require('./model.js')

/***** PROJECTS ENDPOINTS *****/

router.get('/', (req, res) => {
  Project.getAll()
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
  Project.insert(req.body)
    .then(newProject => {
      res.status(200).json(newProject)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// Expose our router to other files
module.exports = router