require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT} = process.env
const {CONNECTION_STRING} = process.env
const controller = require('./controllers/controller')

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
})
.catch(err => {
    console.log(err)
})

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`Working on port ${SERVER_PORT}`)
})