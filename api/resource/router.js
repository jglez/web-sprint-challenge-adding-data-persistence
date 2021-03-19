const express = require('express')

const router = express.Router()

/***** RESOURCES ENDPOINTS *****/

router.get('/', (req, res) => {
  res.status(200).json('Response from /api/resources')
})

// Expose our router to other files
module.exports = router
