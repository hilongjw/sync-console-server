const http = require('http')
const express = require('express')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV || 'production'
const PORT = 9999
const app = express()
const router = express.Router()
const server = http.createServer(app)

const adminToken = {
    keys: {},
    alive: 1000 * 60 * 15,
    check: function (token) {
        return this.keys[token]
    },
    add: function () {
        const token = getUniqueId()
        this.keys[token] = true

        setTimeout(() => {
            this.keys[token] = undefined
        }, this.alive)

        return token
    }
}

class clientQueue {
    constructor ({ server }) {
        this.queue = [],
        this.server = server
    }

    add (item) {
        for (let i = 0, len = this.queue.length; i < len; i++) {
            if (this.queue[i].id === item.id) {
                return console.log('not add-client')
            }
        }

        this.queue.push(item)
        console.log('add-client')
    }

    remove (id) {
        for (let i = 0, len = this.queue.length; i < len; i++) {
            if (id === this.queue[i].id) {
                return this.queue.splice(i, 1)
            }
        }
        console.log('remove-client', this.queue.length)
    }

    notifyAll (key, value) {
        this.queue.map(item => {
            this.server.to(item.id).emit(key, value)
        })
    }
}

function socketServicefunction (server) {
    const SocketIO = require('socket.io')(server)
    const syncConsole = SocketIO.of('/sync-console')

    const onlineClientQueue = new clientQueue({
        server: syncConsole
    })
    const onlineAdminQueue = new clientQueue({
        server: syncConsole
    })

    syncConsole.on('connection', function (socket) {
        socket.on('client:init', data => {
            onlineClientQueue.add({
                id: socket.id,
                system: data.system,
                project: data.project
            })
            onlineAdminQueue.notifyAll('admin:add-client', {
                id: socket.id,
                system: data.system,
                project: data.data
            })
        })

        socket.on('admin:init-req', data => {
            if (checkToken(data.token)) return console.log('admin:init-req  unauth user is not admin')
            socket.emit('admin:init-res', onlineClientQueue.queue)
        })

        socket.on('admin:sync-req', data => {
            if (checkToken(data.token)) return console.log('admin:sync-req unauth user is not admin')
            const target = data.target
            syncConsole.to(target).emit('client:sync-req', {
                target: socket.id
            })
        })

        socket.on('admin:run-code', data => {
            if (checkToken(data.token)) return console.log('admin:run-code unauth user is not admin')
            const target = data.target
            syncConsole.to(target).emit('client:run-code', {
                code: data.code
            })
        })

        socket.on('client:sync-init', (data) => {
            syncConsole.to(data.target).emit('admin:sync-init', {
                data: data.data
            })
        })

        socket.on('client:sync-update', (data) => {
            syncConsole.to(data.target).emit('admin:sync-update', {
                data: data.data
            })
        })

        socket.on('disconnect', function () {
            onlineClientQueue.remove(socket.id)
            onlineAdminQueue.remove(socket.id)
            onlineAdminQueue.notifyAll('admin:remove-client', {
                id: socket.id
            })
        })
    })
}

socketServicefunction(server)

function getUniqueId() {
    let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
    return id
}

function checkToken (token) {
    if (!token || !adminToken.check(token)) return true
    return false
}

router.get('/api/token/gen', (req, res) => {
    if (req.query.auth !== 'awe') return res.status(400).send({ message: 'invalid auth key' })

    res.send({
        token: adminToken.add()
    })
})

router.get('/', (req, res) => {
    res.send('sync-console-server')
})

app.use(router)
app.use(express.static(path.join(__dirname, 'static')))

server.listen(PORT, function () {
    console.log('App is now running on port ' + PORT + '!')
})

module.exports = app
