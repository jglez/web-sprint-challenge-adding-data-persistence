// build your `/api/resources` router here
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('Testing')
})

module.exports = router