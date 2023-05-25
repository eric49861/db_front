import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Start/Start.vue'
import DefaultPage from '../views/DefaultPage/DefaultPage.vue'
import Zone from '../views/Zone/Zone.vue'
import Activity from '../views/Activity/Activity.vue'
import FindGroup from '../views/FindGroup/FindGroup.vue'
import MyInfo from '../views/MyInfo/MyInfo.vue'
import Index from '../views/Index/Index.vue'
import Login from '../views/Login/Login.vue'
import Signup from '../views/Login/Signup.vue'
import NotFund from '../views/Error/NotFund.vue'

const routes = [
    {
        path: "/404",
        components: {
            default: NotFund,
            404: NotFund,
        }
    },
    {
        path: '/',
        components: {
            default: Start,
            app: Start
        },
        children: [
            
        ]
    },
    {
        path: '/login',
        components: {
            default: Login,
            login: Login
        }
    },
    {
        path: '/signup',
        components: {
            default: Signup,
            signup: Signup
        }
    },
    {
        path: '/index',
        components: {
            default: Index,
            app:Index
        },
        children: [
            {
                path: 'default-page',
                components: {
                    default:DefaultPage,
                    index: DefaultPage
                },
            },
            {
                path: 'find-group',
                components: {
                    default: FindGroup,
                    index: FindGroup
                },
            },
            {
                path: 'zone',
                components: {
                    default: Zone,
                    index: Zone
                },
            },
            {
                path: 'activity',
                components: {
                    default: Activity,
                    index: Activity
                },
            },
            {
                path: 'me',
                components: {
                    default: MyInfo,
                    index: MyInfo
                },
            }
        ]
    },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router