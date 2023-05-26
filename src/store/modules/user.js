import api from '../../api/api'
import router from '../../router/router'


const user = {
    state: window.sessionStorage.getItem("user-state") != null ? JSON.parse(window.sessionStorage.getItem("user-state")) : {
        user: {

        },
    },
    getters: {
        getUser(state) {
            return state.user
        },
        getUserId(state) {
            return state.user.id
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
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
                console.log("data: ", res.data)
                //如果响应成功，则保存用户数据并实现路由跳转
                if (res.data.code == 200) {
                    alert(res.data.msg)
                    let user = res.data.user
                    context.commit("updateUser", user)
                    router.push("/index")
                } else if (res.data.code == 401) {
                    //用户名或者密码错误
                    alert(res.data.msg)
                }
            })
        },
        //注册
        asyncSignup(context, form) {
            api.signup(form).catch(function (err) {
                console.log(err)
            }).then(function (res) {
                console.log("res: ", res.data)
                //如果响应成功，则跳转至登录界面
                if (res.data.code == 200) {
                    //成功响应
                    alert(res.data.msg)
                    router.push("/login")
                } else if (res.data.code == 500) {
                    //服务器内部出错
                    alert(res.data.msg)
                    router.push("500")
                } else if (res.data.code == 401) {
                    //用户名已被占用
                    alert(res.data.msg)
                }
            })
        }
    }
}

export default user
