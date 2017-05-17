const path = require('path')
const {
    FuseBox,
    VuePlugin,
    HTMLPlugin,
    BabelPlugin,
    CSSPlugin,
    UglifyJSPlugin,
    EnvPlugin
} = require('fuse-box')

const VueHandler = require('./vue-plugin')

const NODE_ENV = process.env.NODE_ENV || 'production'

const fuseConfig = {
    homeDir: path.resolve(__dirname, '../client'),
    output: path.resolve(__dirname, '../static/client/$name.js'),
    plugins: [
        // VueHandler(),
        VuePlugin(),
        EnvPlugin({
            NODE_ENV: NODE_ENV
        }),
        CSSPlugin({
            group: 'index.css'
        }),
        BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["es2015"],
                plugins: [
                    ["transform-react-jsx"]
                ]
            }
        })
    ]
}

if (NODE_ENV !== 'development') {
    fuseConfig.plugins.push(UglifyJSPlugin())
}

const fuse = FuseBox.init(fuseConfig)

if (NODE_ENV === 'development') {
    fuse.dev({
        port: 9998,
        httpServer: false
    })

    fuse.bundle('index')
        .instructions(`>index/main.js + *.vue`)
        .hmr()
        .watch()

} else {
    fuse.bundle('index')
        .instructions(`>index/main.js + *.vue`)
}

fuse.run()

module.exports = fuse