import Vue from 'vue'
import App from './App.vue'
import './style/index.css'

const app = new Vue({
    el: '#app',
    render: h => h(App),
    components: {
        App
    }
})
