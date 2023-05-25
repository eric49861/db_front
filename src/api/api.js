import service from './index'

export default {
    login: (form) => {
        return  service({
            url: "/v1/1/login",
            method: "POST",
            data: {
                name: form.username,
                password: form.password
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


