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
    //从响应中获取New-Token字段
    console.log("headers:", response.headers.common["content-length"])
    console.log("headers:", response.headers['content-length'])
    //将响应的数据转化为JSON对象
    response.data = JSON.parse(response.data)
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;