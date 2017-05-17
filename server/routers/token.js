'use strict'
const axios = require('axios')
const adminToken = require('../service/token-service')

function generateToken (req, res) {
    const query = req.query

    axios({
        url: 'https://fd.igetget.com/api/project/',
        headers: {
            Authorization: query.token || ''
        } 
    })
    .then(resData => {
        if (query.link) {
            return res.redirect('/?_sync_console_show=true&_sync_console_token=' + adminToken.add())
        }
        res.send({
            token: adminToken.add()
        })
    })
    .catch(err => {
        console.error('routers/token.js generateToken() axios error', err)
        res.status(400).send({ message: 'invalid auth key' })
    })
}

module.exports = {
    '/api/token/gen': {
        method: 'get',
        handler: generateToken
    }
}
