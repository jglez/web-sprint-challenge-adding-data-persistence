const express = require('express')

const router = express.Router()

// Resourses Model
const Resource = require('./model.js')

/***** RESOURCES ENDPOINTS *****/

router.get('/', (req, res) => {
  Resource.getAll()
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// Expose our router to other files
module.exports = router
