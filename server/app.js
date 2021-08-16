const express = require('express')
const morgan = require('morgan')
const monk = require('monk')
const api = require('./api')
require('dotenv/config')

const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use('/api', api)

app.listen(1337, () => {
	console.log('Listening at 1337')
})