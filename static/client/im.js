;(function () {
    var el = document.createElement('div')
    el.id = 'ddd'
    el.setAttribute('style', 'height: 20px; width: 20px; background: red;')
    document.body.appendChild(el)

    var syncConsoleManager = new window.SyncConsoleManager({
        el: '#ddd',
        // for sync console
        // project: 'some IM',
        maxLogCount: 50,
        server: 'http://sync.bood.in/',
    })
})();