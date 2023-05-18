import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../../src/components/main/Start.vue'
import Index from '../../src/components/main/Index.vue'
import Zone from '../../src/components/main/Zone.vue'
import Activity from '../../src/components/main/Activity.vue'
import Square from '../../src/components/main/Square.vue'

const routes = [
    {
        path: '/',
        component: Start,
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