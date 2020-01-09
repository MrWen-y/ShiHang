import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "../pages/home"
import List from "../pages/list"
import Cart from "../pages/cart"
import Mine from "../pages/mine"

let router = new VueRouter({
    routes:[{
        name:'home',
        path:'/home',
        component:Home
    },{
        path:'/',
        component:Home
    },{
        name:'list',
        path:'/list',
        component:List
    },{
        name:'cart',
        path:'/cart',
        component:Cart
    },{
        name:'mine',
        path:'/mine',
        component:Mine
    }]
})

export default router