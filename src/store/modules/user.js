import api from '../../api/api'
import router from '../../router/router'


const user = {
    state: window.sessionStorage.getItem("state") != null ? JSON.parse(window.sessionStorage.getItem("state")) : {
        user:  {
            
        },
        tokenString:""
    },
    getters: {
        getUser(state) {
            return state.user
        },
        getTokenString(state) {
            return state.tokenString
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        updateToken(state, tokenString) {
            state.tokenString = tokenString
        }
    },
    actions: {
        asyncUpdateUser(context, user) {
            context.commit("updateUser", user)
        },
        //登录，并记录返回的token
        asyncLogin(context, form) {
            api.login(form).catch(function (err) {
                console.log(err)
            }).then(function (res) {
                //如果响应成功，则保存用户数据并实现路由跳转
                if (res.data.code == 200) {
                    let user = res.data.user
                    context.commit("updateUser", user)
                    router.push("/index")
                }
            })
        }
    }
}

export default user
