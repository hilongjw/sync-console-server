'use strict'
const http = require('http')
const express = require('express')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'production'
const PORT = 9999
const app = express()
const router = express.Router()
const server = http.createServer(app)

if (NODE_ENV === 'production') {
    const Raven = require('raven')
    Raven.config('http://01c5a6399a49482fb7166558f96c545c:672f558793d24a8ab2b87423f3054391@sentry2.luojilab.com/8').install()
} else if (NODE_ENV === 'development') {
    const fuse = require('./build/fuse')
}

const Config = require('./config')
const adminToken = require('./server/service/token-service')
const socketService = require('./server/service/socket-service')
const indexRouter = require('./server/routers/index')

function isInvalidToken (token) {
    if (!token || !adminToken.check(token)) {
        console.log(adminToken, token)
        return true
    }
    return false
}

socketService({
    server,
    isInvalidToken
})

router.get('/_docker_healthcheck', (req, res) => {
    res.send('') 
})

// router mount
const routerMount = require('./server/mount')
routerMount(router, path.resolve(__dirname, 'server/routers'))

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', 'SyncConsole')
    next()
})

app.use(router)
app.use(express.static(path.resolve(__dirname, 'static')))

server.listen(PORT, function () {
    console.log('App is now running on port ' + PORT + '!')
})

module.exports = app
