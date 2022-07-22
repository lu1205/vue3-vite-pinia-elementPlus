import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import {resolve} from 'path'
import styleImport,{VantResolve} from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver,VantResolver,NaiveUiResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) => `vant/es/${name}/style`
                },
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    resolveStyle: (name) => `element-plus/theme-chalk/${name}.css`
                },
            ]
        }),
        AutoImport({
            resolvers: [ElementPlusResolver(),VantResolver(),NaiveUiResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(),VantResolver(),NaiveUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
        }
    },
    base: './', // 设置打包路径
    server: {
        port: 4000, // 设置服务启动端口号
        open: true, // 设置服务启动时是否自动打开浏览器
        cors: true // 允许跨域

        // 设置代理，根据我们项目实际情况配置
        // proxy: {
        //   '/api': {
        //     target: 'http://xxx.xxx.xxx.xxx:8000',
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: (path) => path.replace('/api/', '/')
        //   }
        // }
    }
})
