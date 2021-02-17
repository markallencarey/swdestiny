require('dotenv').config()
const express = require('express')
const app = express()
const cardCtrl = require('./cardController')

const { SERVER_PORT } = process.env

app.use(express.json())

app.get('/api/cards/:card_id', cardCtrl.getSingleCard)
app.get('/api/cards', cardCtrl.getAllCards)
app.get('/api/set/:set_code', cardCtrl.getAllSet)
app.get('/api/sets', cardCtrl.getSets)
app.get('/api/cards?q=:keyword', cardCtrl.findCard)

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))