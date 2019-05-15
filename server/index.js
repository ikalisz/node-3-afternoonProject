require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT} = process.env
const {CONNECTION_STRING} = process.env
const controller = require('./controllers/products_controller')
console.log(__dirname)
massive(CONNECTION_STRING, {scripts: __dirname + '/db'})
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Connected to DB')
})
.catch(err => {
    console.log(err)
})

app.use(express.json())
app.get('/api/products', controller.getAll)
app.get('/api/products/:id', controller.getOne)
app.put('/api/products/:id?desc=...', controller.update)
app.post('/api/products', controller.create)
app.delete('/api/products/:id', controller.delete)

app.listen(SERVER_PORT, () => {
    console.log(`Working on port ${SERVER_PORT}`)
})