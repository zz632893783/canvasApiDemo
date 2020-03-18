import Vue from 'vue'
import VueRouter from 'vue-router'
import demo01 from '@/views/demo01'
import demo02 from '@/views/demo02'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'demo01',
    component: demo01
}, {
    path: '/demo02',
    name: 'demo02',
    component: demo02
}]

const router = new VueRouter({
    routes
})

export {
    routes,
    router
}
