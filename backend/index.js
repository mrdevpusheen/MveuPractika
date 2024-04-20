const PORT = 9001

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('jsonwebtoken')

const app = express()

app.use(cors())
app.use(express.json())

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    } catch (e) {
        console.log(e)
    }
}

start()