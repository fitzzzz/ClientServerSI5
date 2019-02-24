import Vue from 'vue'
import Router from 'vue-router'
import FoodRate from './components/pages/FoodRate'
import FoodCompare from './components/pages/FoodCompare'
import FoodList from './components/pages/FoodList'
import Food from './components/pages/Food'
import RecipeList from './components/pages/RecipeList'
import ShopList from './components/pages/ShopList'
import Home from './components/pages/Home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/foodrate',
            name: 'foodrate',
            component: FoodRate
        },
        {
            path: '/foodcompare',
            name: 'foodcompare',
            component: FoodCompare
        },
        {
            path: '/foodlist',
            name: 'foodlist',
            component: FoodList
        },
        {
            path: '/foodlist/:page',
            name: 'foodlistpage',
            component: FoodList
        },
        {
            path: '/recipes',
            name: 'fecipelist',
            component: RecipeList
        },
        {
            path: '/shops',
            name: 'shoplist',
            component: ShopList
        },
        {
            path: '/shops/:page',
            name: 'shoplistpage',
            component: ShopList
        },
        {
            path: '/foods/:id',
            name: 'food',
            component: Food,
        }
    ]
})