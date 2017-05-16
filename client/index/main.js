import Vue from 'vue/dist/vue.runtime.min.js'
import App from './App.vue'
import './style/index.css'

const app = new Vue({
    el: '#app',
    data () {
        return {
            syncConsoleManager: null
        }
    },
    render: h => h(App),
    components: {
        App
    },
    mounted () {
        this.syncConsoleManager = new window.SyncConsoleManager({
            el: '#app',
            // for sync console
            project: 'im',
            maxLogCount: 50,
            server: 'http://sync-console-fe.luojilab.com:18000/',
        })
    }
})

export default app
