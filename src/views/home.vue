<template>
    <div class="container">
        <div class="header">
            <div class="header_title">
                系统{{ tweened.number.toFixed(0) }}
                <!--                <input v-model.number="number" />-->
            </div>
            <div @click="exit" class="exit_btn">退出登录</div>
        </div>
        <div class="main">
            <div class="slide-left">
                <el-menu
                    :default-active="$router.currentRoute.fullPath"
                    router
                    unique-opened
                    class="el-menu-vertical-demo"
                >
                    <el-sub-menu
                        v-for="(item, index) in menus"
                        :key="index"
                        :index="index+''">
                        <template #title>
                            <span>{{ item.fullName }}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item
                                v-for="subItem in item.children"
                                :key="subItem.id"
                                :index="subItem.path"
                            >
                                {{ subItem.fullName }}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </div>
            <div class="right-main">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {userStore} from "../stores/useStore";
import {useRouter} from 'vue-router'
import {ElMessage} from "element-plus";
import {ref, reactive, watch} from 'vue'
import gsap from 'gsap';

const number = ref(0)
const tweened = reactive({
    number: 0
})
// watch(number, (n) => {
//     gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
// })
// setInterval(()=>{
//     number.value += 10
// },500)

const menus = [
    {
        "id": 1,
        "fullName": "菜单一",
        "path": "",
        "children": [
            {
                "id": 11,
                "fullName": "naive-ui",
                "path": "/guangdongCuisine/plainChicken",
            },
            {
                "id": 12,
                "fullName": "element-ui",
                "path": "/guangdongCuisine/roastSucklingPig",
            },
        ]
    },
    {
        "id": 2,
        "fullName": "菜单二",
        "path": "",
        "children": [
            {
                "id": 21,
                "fullName": "子菜单一",
                "path": "/anhuiCuisine/fulijiRoastChicken",
            },
            {
                "id": 22,
                "fullName": "子菜单二",
                "path": "/anhuiCuisine/smellyMandarinFish",
            },
        ]
    },
    {
        "id": 3,
        "fullName": "地图",
        "path": "",
        "children": [
            {
                "id": 31,
                "fullName": "地图",
                "path": "/map/index",
            },
        ]
    },
]
const router = useRouter();
const exit = (): void => {
    const useStore = userStore();
    useStore.updateLoginState(false)
    ElMessage({
        message: '退出成功',
        type: 'success',
        duration: 1000,
        onClose: () => {
            router.push({
                path: '/'
            })
        }
    })
}
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #f6f6f6;

    .header_title {
        font-size: 18px;
        font-weight: 700;
        margin-left: 16px
    }

    .exit_btn {
        font-size: 14px;
        text-decoration: underline;
    }
}

.main {
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: row;
}

.slide-left {
    width: 10%;
    min-width: 200px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    height: calc(100vh - 100px);
}

.right-main {
    width: 100%;
    padding: 0;
}
</style>
