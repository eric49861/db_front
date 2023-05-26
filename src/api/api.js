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
    validateToken: (tokenString) => {
        return service({
            url: "v1/3/valid-token",
            method: "POST",
            data: {
                token: tokenString
            }
        })
    },
    getIngGroup: () => {
        return service({
            url: "/v1/getGroup/ing",
            methods: "GET"
        })
    },
    getEdGroup: () => {
        return service({
            url: "/v1/getGroup/ed",
            methods: "GET"
        })
    },
    getAllGroup: () => {
        return service({
            url: "/v1/getGroup/all",
            methods: "GET"
        })
    },
    getMyGroup: () => {
        return service({
            url: "/v1/getGroup/mine",
            methods: "GET"
        })
    }
}


