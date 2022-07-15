import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import lodash from 'lodash'
// import {createPinia} from 'pinia'
// import piniaPluginPersist from 'pinia-plugin-persist'
import piniaStore from './stores/index'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(lodash)
app.use(piniaStore)
// app.use(createPinia().use(piniaPluginPersist))

app.mount('#app')

