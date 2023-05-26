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
import ServerError from '../views/Error/ServerError.vue'

import api from '../api/api'
import store from '../store/index'

const routes = [
    {
        path: "/404",
        components: {
            default: NotFund,
            404: NotFund,
        }
    },
    {
        path: "/500",
        components: {
            default: ServerError,
            500: ServerError,
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
            app: Index
        },
        children: [
            {
                path: 'default-page',
                components: {
                    default: DefaultPage,
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

// 添加路由守卫进行鉴权
router.beforeEach((to, from, next) => {
    console.log("topath: ", to.path)
    console.log("frompath: ", from.path)
    console.log("next: ", next)
    if (to.path == "/login" || to.path == "/signup" || to.path == "/") {
        next()
    } else {
        //检查是否有token
        let tokenString = store.getters.getTokenString
        if (tokenString == null) {
            alert("请先进行登录")
        } else {
            //检查token是否有效，防止用户篡改
            api.validateToken(tokenString).catch(function (err) {
                return Promise.reject(err)
            }).then(function (res) {
                if (res.data.code == 200) {
                    next()
                } else {
                    alert(res.data.msg)
                }
            })

        }
    }
})
export default router