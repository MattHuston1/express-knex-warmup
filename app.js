const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())


app.get('/', (response,request,next) => {
  response.send('hello')
})