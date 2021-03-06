const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://datatonic.luismartinez.dev',
    'https://datatonic.netlify.app'
  ],
}
module.exports = (app) => {
  app.use(express.json())
  app.use(cors(corsOptions))
  app.use(helmet())
}
