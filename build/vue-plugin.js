let vueCompiler
let vueTranspiler

function toFunction (code) {
    return vueTranspiler('function render () {' + code + '}')
}

function injectStyle (content) {
    return `(function injectStyle () {
        var el = document.createElement('style');
        el.type = 'text/css';
        el.innerHTML = "${content.replace(/\n/g, '')}";
        document.getElementsByTagName('head')[0].appendChild(el);
    })();`
}

function compileTemplateContent (context, engine, content) {
    return new Promise((resolve, reject) => {
        if (!engine) { return resolve(content); }
        
        const cons = require('consolidate');
        if (!cons[engine]) { return content; }
    
        cons[engine].render(content, {
            filename: 'base',
            basedir: context.homeDir,
            includeDir: context.homeDir
        }, (err, html) => {
            if (err) { return reject(err); }
            resolve(html)
        });
    });
}

class VueLoader {
    constructor (options = {}) {
        this.test = /.vue$/
        this.options = {}
    }

    init (context) {
        context.allowExtension('.vue')
    }

    transform (file, ast) {
        const context = file.context

        // caching ...
        if (context.useCache) {
            let cached = context.cache.getStaticCache(file)
            if (cached) {
                file.isLoaded = true
                if (cached.sourceMap) {
                    file.sourceMap = cached.sourceMap
                }
                file.analysis.skip()
                file.analysis.dependencies = cached.dependencies
                file.contents = cached.contents

                return
            }
        }

        file.loadContents()

        if (!vueCompiler) {
            vueCompiler = require('vue-template-compiler')
            vueTranspiler = require('vue-template-es2015-compiler')
        }

        let result = vueCompiler.parseComponent(file.contents, this.options)

        if (result.template && result.template.type === "template") {
            let styleContent = ''

            result.styles.map(style => {
                styleContent += style.content
            })

            let templateLang = (result.template.attrs) ? result.template.attrs.lang : null
            return compileTemplateContent(context, templateLang, result.template.content)
                .then(html => {
                    let compiled = vueCompiler.compile(html)

                    let jsContent = result.script.content
                    const ts = require("typescript")

                    const jsTranspiled = ts.transpileModule(jsContent, file.context.getTypeScriptConfig())
                    const tsResult = `${ injectStyle(styleContent) }; var _p = {};
    var _v = function(exports){${jsTranspiled.outputText}
    };
    _p.render = ` + toFunction(compiled.render) + `
    _p.staticRenderFns = [ ` + compiled.staticRenderFns.map(toFunction).join(',')  + ` ];
    var _e = {}; _v(_e); _p = Object.assign(_e.default, _p)
    module.exports =_p;
                    `
                    file.contents = tsResult
                    file.analysis.parseUsingAcorn()
                    file.analysis.analyze()

                    if (context.useCache) {
                        context.emitJavascriptHotReload(file)
                        context.cache.writeStaticCache(file, file.sourceMap)
                    }
                    console.log(context)
                    return true
                }).catch(err => {
                    console.error(err)
                })
        }

    }
}

module.exports = (options) => {
    return new VueLoader(options)
}