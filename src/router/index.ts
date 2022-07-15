import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {userStore} from "../stores/useStore";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        component: () => import("../views/login.vue"),
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import("../views/test.vue"),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("../views/home.vue"),
        children: [
            {
                path: '/anhuiCuisine/fulijiRoastChicken',
                name: 'anhuiCuisineFilijiRoastChicken',
                component: () => import('../views/anhuiCuisine/fulijiRoastChicken.vue')
            },
            {
                path: '/anhuiCuisine/smellyMandarinFish',
                name: 'anhuiCuisineSmellyMandarinFish',
                component: () => import('../views/anhuiCuisine/smellyMandarinFish.vue')
            },
            {
                path: '/guangdongCuisine/plainChicken',
                name: 'anhuiCuisinePlainChicken',
                component: () => import('../views/guangdongCuisine/plainChicken.vue')
            },
            {
                path: '/guangdongCuisine/roastSucklingPig',
                name: 'anhuiCuisineRoastSucklingPig',
                component: () => import('../views/guangdongCuisine/roastSucklingPig.vue')
            },
            {
                path: '/map/index',
                name: 'mapIndex',
                component: () => import('../views/map/index.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // const useStore = userStore()
    // if (!useStore.isLogin && to.path !== '/') {
    //     next({path: '/'})
    // } else {
    //     if (to.meta.title) {
    //         document.title = to.meta.title as any;
    //     }
    //     next();
    // }
    next()
});

export default router
