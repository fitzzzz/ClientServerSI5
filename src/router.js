import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/ingredients',
            name: 'SearchFood',
            component: SearchFood
        }
    ]
})