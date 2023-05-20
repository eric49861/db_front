import { createRouter, createWebHashHistory } from 'vue-router'
import StartPage from '../views/Start/Start.vue'
import Index from '../views/Index/Index.vue'
import Zone from '../views/Zone/Zone.vue'
import Activity from '../views/Activity/Activity.vue'
import Square from '../views/Square/Square.vue'

const routes = [
    {
        path: '/',
        component: StartPage,
    },
    {
        path: '/index',
        component: Index,
    },
    {
        path: '/square',
        component: Square,
    },
    {
        path: '/zone',
        component: Zone,
    },
    {
        path: '/activity',
        component: Activity,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router