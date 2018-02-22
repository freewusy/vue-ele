import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/content/Goods'
import Ratings from '@/components/content/Ratings'
import Seller from '@/components/content/Seller'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/goods',
            component: Goods
        },
        {
            path: '/ratings',
            component: Ratings
        },
        {
            path: '/Seller',
            component: Seller
        },
        { 
            path: '/', 
            redirect: '/goods' 
        }
    ],
    linkActiveClass: 'active'
})
