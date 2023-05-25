//配置mockjs
import mockjs from "mockjs";
import service from "./mockData/data"

mockjs.mock('/v1/getGroup/ing', service.getIngGroup)
mockjs.mock('/v1/getGroup/ed', service.getEdGroup)
mockjs.mock("/v1/getGroup/all", service.getAllGroup)
mockjs.mock("/v1/getGroup/mine", service.getMyGroup)
mockjs.mock("/v1/1/login", "post", service.login)