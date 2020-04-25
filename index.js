require('dotenv').config()
const express = require('express')
const server = express()
const port = process.env.PORT || 8000
const dataTonic = require('./dataTonic')
require('./src/middleware')(server)

server.get('/', (req, res) => res.json(dataTonic))

server.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
