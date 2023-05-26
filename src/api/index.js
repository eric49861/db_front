//配置axios
import axios from "axios";
import store from "../store/index"

const service = axios.create({
    baseURL: "http://192.168.1.101:8888/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8;multipart/form-data;"
    },
    transformResponse: [
        function (data) {
            //将响应数据转换为JSON
            data = JSON.parse(data)
            return data
        }
    ]
})

service.interceptors.request.use(function (config) {
    //将token添加到请求头中
    if (store.getters.getTokenString != "") {
        config.headers.set("Token", store.getters.getTokenString)
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    let tokenString = response.headers.get("token")
    console.log("token", tokenString)
    let newTokenString = response.headers.get("new-token")
    console.log("new-token", newTokenString)

    if (tokenString != undefined) {
        //将token字段存储在store中
        store.dispatch("asyncUpdateToken", tokenString)
    } else if (newTokenString != undefined) {
        //如果存在新的token，说明token被刷新了，替换原来的token
        store.dispatch("asyncUpdateToken", newTokenString)
    }
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;