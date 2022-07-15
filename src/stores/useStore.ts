import {defineStore} from "pinia";

export const userStore = defineStore('user', {
    state: () => {
        return {
            user: {
                username: 'admin',
                password: '123456',
            },
            isLogin: false,
        }
    },
    getters: {
        queryUser(): object {
            return this.user
        },
        queryIsLogin(): boolean {
            return this.isLogin
        }
    },
    actions: {
        updateUser(data: any) {
            this.user = {...data}
        },
        updateLoginState(status: boolean) {
            this.isLogin = status
        }
    },

    // 开启数据持久化 默认存储到sessionStorage
    persist: {
        enabled: true,
        strategies: [
            {
                // key: 'loginUser',
                // 自定义存放位置
                storage: localStorage,
            }
        ]
    }
})
