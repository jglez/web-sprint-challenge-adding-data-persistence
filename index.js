const server = require('./api/server.js')

const PORT = 5000

// Start server
server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
