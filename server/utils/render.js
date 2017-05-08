const pug = require('pug')
const path = require('path')

function render (view, data) {
    return pug.compileFile(path.resolve(__dirname, '../views/' + view + '.pug'), {
        cache: true
    })(data)
}

module.exports = render