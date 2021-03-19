// Import Express
const express = require('express')

// Import Router
const resourcesRouter = require('./resource/router.js')

// Initialize Express application
const server = express()

// Enable Express to parse JSON bodies
server.use(express.json())

server.use('/api/resources', resourcesRouter)

// Expose our server to other files
module.exports = server