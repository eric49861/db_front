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
        },
        getUsername(state) {
            return state.user.username
        },
        // 获取用户的密码(并不是明码)
        getUserPassword(state) {
            return state.user.password
        },
        getUserAvatar(state) {
            return state.user.avatar
        },
        getUserGender(state) {
            return state.user.gender
        },
        getUserAge(state) {
            return state.user.age
        },
        getUserSignature(state) {
            return state.user.signature
        },
        getUserQQ(state) {
            return state.user.qq
        },
        getUserIntegral(state) {
            return state.user.integral
        },
        getUserStudyTime(state) {
            return state.user.studyTime
        },
        getUserOccupation(state) {
            return state.user.occupation
        },
        getUserCreateTime(state) {
            return state.user.createTime
        },
        getUserUpdateTime(state) {
            return state.user.updateTime
        },
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
        },
        //用户修改个人信息
        asyncModifyUserInfo(context, form) {
            api.modifyUserInfo(form).catch(err => {
                return Promise.reject(err)
            }).then(res => {
                if (res.data.code == 200) {
                    alert(res.data.msg)
                    //更新用户信息
                    context.commit("updateUser", res.data.user)
                }
            })
        }
    }
}

export default user
