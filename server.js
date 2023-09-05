require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

// const getIp = (req, res, next) => {
//     const ipAddress = req.socket.remoteAddress;
//     console.log(ipAddress)
//     next()
// }

// middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// connect to db and listen for requests
mongoose.connect(process.env.dbURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening for requests on port: ' + process.env.PORT)
        })
    })
    .catch(err => console.log(err))


// routes
app.use('/', require('./routes/home'))

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})