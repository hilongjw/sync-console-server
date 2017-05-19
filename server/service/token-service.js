'use strict'

const NODE_ENV = process.env.NODE_ENV || 'production'

const adminToken = {
    keys: {
        test: NODE_ENV === 'development'
    },
    alive: 1000 * 60 * 60,
    check: function (token) {
        return this.keys[token]
    },
    add: function () {
        const token = getUniqueId()
        this.keys[token] = true

        setTimeout(() => {
            delete this.keys[token]
        }, this.alive)

        return token
    }
}

function getUniqueId() {
    let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
    return id
}

module.exports = adminToken
