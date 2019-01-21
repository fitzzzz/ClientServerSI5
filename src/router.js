import Vue from 'vue'
import Router from 'vue-router'
import SearchFood from './components/SearchFood.vue'
import Home from './components/Home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/recipes',
            name: 'SearchFood',
            component: SearchFood
        }
    ]
})