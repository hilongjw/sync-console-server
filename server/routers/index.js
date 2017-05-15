'use strict'

const render = require('../utils/render')
const appConfig = require('./config')

function index (req, res) {
    res.send(render('index',
        {
            title: 'syncConsole test',
            bundle: 'im'
        }
    ))
}

function dash (req, res) {
    res.send(render('index',
        {
            title: 'um im',
            bundle: 'im'
        }
    ))
}

module.exports = {
    '/': {
        method: 'get',
        handler: index
    },
    '/dash': {
        method: 'get',
        handler: index
    },
}