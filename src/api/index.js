//配置axios
import axios from "axios";


const service = axios.create({
    // baseURL: "http://topc.fun/",
    timeout: 5000,
    headers: {
        "Content-Type":"application/json;charset=utf-8"
    },
    transformResponse: [
        function (data) {
            return data
        }
    ]
})

service.interceptors.request.use(function (config) {
    //TODO:从store中获取token添加到请求头中
    
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    //TODO:从请求头中获取token字段，并将该字段放入Vuex中管理，以后发送的请求都要带上该token
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;