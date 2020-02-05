const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.port || 80
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true },
//     (err) => {
//         if (err) console.log("looi roi")
//         console.log('Connected')
//     }
// )
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

// app.post('/', (req, res) => {

// })


app.listen(port, () => {
    console.log("app run in on", port)
})