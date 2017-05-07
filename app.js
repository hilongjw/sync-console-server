'use strict'
const http = require('http')
const express = require('express')
const path = require('path')

const app = express()
const PORT = 6666
const server = http.createServer(app)

function socketServicefunction (server) {
    const SocketIO = require('socket.io')(server)
    const syncConsole = SocketIO.of('/sync-console')

    const onlineClientQueue = {
        queue: [],
        add: function (client) {
            let has = false
            this.queue.map((c, i) => {
                if (c.id === client.id) {
                    has = true
                }
            })
            if (!has) this.queue.push(client)
            console.log('admin:add-client')
            syncConsole.emit('admin:add-client', {
                id: client.id,
                system: client.system
            })
        },
        remove: function (client) {
            this.queue.map((c, i) => {
                if (c === client || c.id === client.id) {
                    this.queue.splice(i, 1)
                }
            })
            syncConsole.emit('admin:remove-client', {
                id: client.id
            })
            console.log('removed', this.queue.length)
        }
    }

    function checkToken (token) {
        if (!token || token !== 'token') return true
        return false
    }

    syncConsole.on('connection', function (socket) {
        socket.on('client:init', data => {
            onlineClientQueue.add({
                id: socket.id,
                system: data.system
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
            onlineClientQueue.remove({
                id: socket.id
            })
        })
    })
}

socketServicefunction(server)

app.use(express.static(path.join(__dirname, 'static')))

server.listen(PORT, function () {
    console.log('App is now running on port ' + PORT + '!')
})

module.exports = app
