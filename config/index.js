const NODE_ENV = process.env.NODE_ENV || 'production'
const PORT = 8666

const configMap = {
    development: {
        cdn: 'http://127.0.0.1:8666/',
        static: 'http://127.0.0.1:8666/',
        port: PORT
    },
    testing: {
        cdn: 'http://sync.bood.in/',
        static: 'http://sync.bood.in/',
        port: PORT
    },
    simulation: {
        cdn: 'http://sync.bood.in/',
        static: 'http://sync.bood.in/',
        port: PORT
    },
    production: {
        cdn: 'http://sync.bood.in/',
        static: 'http://sync.bood.in/',
        port: PORT
    }
}

const currentConfig = configMap[env] || configMap.production

module.exports = currentConfig
