const http = require('http')
const express = require('express')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'production'
const PORT = 9999
const app = express()
const router = express.Router()
const server = http.createServer(app)

const adminToken = require('./server/service/token-service')
const socketService = require('./server/service/socket-service')
const indexRouter = require('./server/routers/index')

function checkToken (token) {
    if (!token || !adminToken.check(token)) return true
    return false
}

socketService({
    server,
    checkToken
})

router.get('/api/token/gen', (req, res) => {
    if (req.query.auth !== 'awe') return res.status(400).send({ message: 'invalid auth key' })

    res.send({
        token: adminToken.add()
    })
})

// router.get('/', (req, res) => {
//     res.send('sync-console-server')
// })

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
