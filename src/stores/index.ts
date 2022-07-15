import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const piniaStore = createPinia()
piniaStore.use(piniaPluginPersist)

export default piniaStore
