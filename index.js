require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const dataTonic = require('./dataTonic.json')
require('./src/middleware')(app)

app.get('/', (req, res) => res.json(dataTonic))

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
