
class VueLoader {
    constructor (options = {}) {
        this.test = /.js$/
        this.options = options
    }

    transform (file) {
        const context = file.context

        // caching ...
        // if (context.useCache) {
        //     let cached = context.cache.getStaticCache(file)
        //     if (cached) {
        //         file.isLoaded = true
        //         if (cached.sourceMap) {
        //             file.sourceMap = cached.sourceMap
        //         }
        //         file.analysis.skip()
        //         file.analysis.dependencies = cached.dependencies
        //         file.contents = cached.contents

        //         return
        //     }
        // }

        file.loadContents()

        file.contents
        file.analysis.parseUsingAcorn()
        file.analysis.analyze()

        console.log('file', file.analysis)
        return Promise.resolve()
    }
}

module.exports = (options) => {
    return new VueLoader(options)
}