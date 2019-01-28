import Vue from 'vue'
import Router from 'vue-router'
import FoodRate from './components/pages/FoodRate'
import FoodCompare from './components/pages/FoodCompare'
import FoodList from './components/pages/FoodList'
import Home from './components/pages/Home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/foodrate',
            name: 'foodrate',
            component: FoodRate
        },
        {
            path: '/foodcompare',
            name: 'FoodCompare',
            component: FoodCompare
        },
        {
            path: '/foodlist',
            name: 'FoodList',
            component: FoodList
        }
    ]
})