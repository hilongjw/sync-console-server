'use strict'
const http = require('http')
const express = require('express')
const path = require('path')

const app = express()
const PORT = 6666
const server = http.createServer(app)

const socketService = require('./server/socket-service')

socketService(server)

app.use(express.static(path.join(__dirname, 'static')))

server.listen(PORT, function () {
    console.log('App is now running on port ' + PORT + '!')
})

module.exports = app
