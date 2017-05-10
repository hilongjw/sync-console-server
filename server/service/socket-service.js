'use strict'

class clientQueue {
    constructor ({ server }) {
        this.queue = [],
        this.server = server
    }

    add (item) {
        for (let i = 0, len = this.queue.length; i < len; i++) {
            if (this.queue[i].id === item.id) {
                return
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
            console.log('notifyAll', item.id, key)
            this.server.to(item.id).emit(key, value)
        })
    }
}

function errorHelper (socket, message) {
    socket.emit('client:error', {
        message: message
    })
}

module.exports = function socketService ({ server, isInvalidToken }) {
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
            const clientData = {
                id: socket.id,
                system: data.system,
                project: data.project
            }

            onlineClientQueue.add(clientData)
            onlineAdminQueue.notifyAll('admin:add-client', clientData)
        })

        socket.on('admin:init-req', data => {
            if (isInvalidToken(data.token)) return errorHelper(socket, 'admin:init-req  unauth user is not admin')
            onlineAdminQueue.add({
                id: socket.id
            })
            onlineClientQueue.remove(socket.id)
            socket.emit('admin:init-res', onlineClientQueue.queue.filter(item => item.project === data.project))
        })

        socket.on('admin:sync-req', data => {
            if (isInvalidToken(data.token)) return errorHelper(socket, 'admin:sync-req unauth user is not admin')
            const target = data.target
            syncConsole.to(target).emit('client:sync-req', {
                target: socket.id
            })
        })

        socket.on('admin:run-code', data => {
            if (isInvalidToken(data.token)) return errorHelper(socket, 'admin:run-code unauth user is not admin')
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

        function syncUpdateData (data) {
            syncConsole.to(data.target).emit('admin:sync-update', {
                data: data.data
            })
        }

        socket.on('client:sync-update', syncUpdateData)

        socket.on('disconnect', function () {
            onlineClientQueue.remove(socket.id)
            onlineAdminQueue.remove(socket.id)
            onlineAdminQueue.notifyAll('admin:remove-client', {
                id: socket.id
            })
        })
    })
}
