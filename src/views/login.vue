<template>
    <div class="container">
        <div class="form_box">
            <div class="glass-container">
                <el-form :model="form" label-width="10vw">
                    <el-form-item label="Username：">
                        <el-input v-model="form.username" placeholder="please input Username"/>
                    </el-form-item>
                    <el-form-item label="Password：">
                        <el-input v-model="form.password" type="password" placeholder="please input Password"/>
                    </el-form-item>
                </el-form>
                <div class="btn_box">
                                        <el-button v-loading.fullscreen.lock="fullscreenLoading" type="info" @click="submitFormData">登录</el-button>
<!--                    <el-button type="info" @click="handleThrottle">登录</el-button>-->
                    <el-button type="info" @click="registerUser">注册</el-button>
<!--                    <van-button type="primary">主要按钮</van-button>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {onMounted, reactive, toRefs, ref} from "vue";
import {useRouter} from "vue-router";
import {ElMessage, ElLoading} from 'element-plus'
import {userStore} from "../stores/useStore";
import {throttle} from "../utils/common";
import _ from "lodash"
import { Button } from 'vant';

export default {
    name: "index",
    setup() {
        const useStore = userStore()
        const router = useRouter();
        // const fullscreenLoading = ref(false)
        const dataMap = reactive({
            form: {
                username: '',
                password: '',
            },
            loading: <any>ref(null),
            fullscreenLoading: false,
            checkFormData: (): boolean => {
                if (dataMap.form.username.trim() === '') {
                    ElMessage({
                        message: 'Please input Username',
                        type: 'warning',
                        duration: 1000,
                    })
                    return false
                }
                if (dataMap.form.password.trim() === '') {
                    ElMessage({
                        message: 'Please input Password',
                        type: 'warning',
                        duration: 1000,
                    })
                    return false
                }
                return true;
            },
            submitFormData: (): void => {
                dataMap.fullscreenLoading = true
                if (!dataMap.checkFormData()) {
                    dataMap.fullscreenLoading = false
                    return;
                }
                if (dataMap.form.username === useStore.user.username && dataMap.form.password === useStore.user.password) {
                    dataMap.fullscreenLoading = false
                    useStore.updateLoginState(true)
                    router.push({
                        path: '/home'
                    });
                } else {
                    dataMap.fullscreenLoading = false
                    ElMessage({
                        message: 'Username or Password is warning',
                        type: 'warning',
                        duration: 1000,
                    })
                }
            },
            handleThrottle: throttle(() => {
                console.log(12)
            }, 1000),
            handleThrottle2: _.throttle(() => {
                console.log(12)
            }, 1000),
            registerUser: (): void => {
                dataMap.loading = ElLoading.service({
                    lock: true,
                    text: 'Loading',
                    background: 'rgba(0, 0, 0, 0.7)',
                })
                if (!dataMap.checkFormData()) {
                    dataMap.loading.close()
                    return;
                }
                useStore.updateUser(dataMap.form)
                dataMap.loading.close()
                ElMessage({
                    message: '注册成功，请登录',
                    type: 'success',
                    duration: 1000,
                })
            },
        })
        onMounted(() => {
        })
        return {...toRefs(dataMap)}
    },

}
</script>

<style scoped lang="less">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .form_box {
        width: 50vw;
        height: 50vh;

        .glass-container {
            width: 100%;
            height: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            border-radius: 10px;
            backdrop-filter: blur(5px);
            background-color: rgba(0, 191, 255, 0.075);
            box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
            border: 2px rgba(255, 255, 255, 0.4) solid;
            border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
            border-right: 2px rgba(40, 40, 40, 0.35) solid;
        }

        .btn_box {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }
}


</style>
