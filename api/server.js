// Import Express
const express = require('express')

// Import Resource Router
const resourcesRouter = require('./resource/router.js')

// Import Project Router

// Import Task Router

// Initialize Express application
const server = express()

// Enable Express to parse JSON bodies
server.use(express.json())

// Use Resources Router
server.use('/api/resources', resourcesRouter)

// Expose our server to other files
module.exports = server
