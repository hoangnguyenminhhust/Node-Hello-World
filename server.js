const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.port || 3000

// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true },
//     (err) => {
//         if (err) console.log("looi roi")
//         console.log('Connected')
//     }
// )
app.get('/', (req, res) => {
    res.send('Hello World')
})

// app.post('/', (req, res) => {

// })

app.listen(port, () => {
    console.log("app run in on", port)
})