import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//导入打字机特效插件
import vuetyped from 'vue3typed'

import router from './router/router'
import './mock/index.js'
//导入状态管理state
import store from './store/index'


const app = createApp(App)
app.use(ElementPlus)
    .use(router)
    .use(vuetyped)
    .use(store)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')