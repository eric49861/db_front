import store from '../store/index'
import service from './index'

export default {
    // 登录接口
    login: (form) => {
        return service({
            url: "/v1/1/login",
            method: "POST",
            data: {
                username: form.username,
                password: form.password
            },
        })
    },
    signup: (form) => {
        return service({
            url: "v1/1/signup",
            method: "POST",
            data: {
                username: form.username,
                password: form.password,
                gender: form.gender == "male" ? "男" : "女",
                qq: form.qq
            }
        })
    },
    //验证token是否合法
    validateToken: (tokenString) => {
        return service({
            url: "v1/3/valid-token",
            method: "POST",
            data: {
                token: tokenString
            }
        })
    },
    modifyUserInfo: (form) => {
        return service({
            url: "v1/2/modify-user-info",
            method: "POST",
            data: {
                id: store.getters.getUserId,
                username: form.username,
                password: form.password,
                age: form.age,
                gender: form.gender,
                occupation: form.occupation,
                signature: form.signature
            }
        })

    },
    getIngGroup: () => {
        return service({
            url: "/v1/getGroup/ing",
            methods: "GET",
            params: {
                id: store.getters.getUserId
            }
        })
    },
    getEdGroup: () => {
        return service({
            url: "/v1/getGroup/ed",
            methods: "GET",
            params: {
                id: store.getters.getUserId
            }
        })
    },
    getAllGroup: () => {
        return service({
            url: "/v1/getGroup/all",
            methods: "GET",
            params: {
                id: store.getters.getUserId
            }
        })
    },
    getMyGroup: () => {
        return service({
            url: "/v1/getGroup/mine",
            methods: "GET",
            params: {
                id: store.getters.getUserId
            }
        })
    }
}


