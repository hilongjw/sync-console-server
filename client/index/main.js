import Vue from 'vue/dist/vue.runtime.min.js'
import App from './App.vue'
import './style/index.css'

const app = new Vue({
    el: '#app',
    render: h => h(App),
    components: {
        App
    }
})

export default app
