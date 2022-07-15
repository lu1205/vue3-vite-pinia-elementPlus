<template>
    <div class="container">
        <div id="mapContainer"></div>
        <div class="btn_box">
            <el-button @click="showMarkerPoint" type="primary">显示标记点</el-button>
            <el-button @click="clearMarkerPoint" type="primary">清空标记点</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {shallowRef} from '@vue/reactivity'
import AMapLoader from '@amap/amap-jsapi-loader';
import {onMounted, reactive, ref} from "vue";
import pointIcon from '../../../static/img/point_icon.png';

const markerList: Array<any> = [
    {
        id: 1,
        coordination: '117.181899,31.863815',
        description: '这是一'
    },
    {
        id: 2,
        coordination: '117.157008,31.834506',
        description: '这是二'
    },
    {
        id: 3,
        coordination: '117.127482,31.863232',
        description: '这是三'
    },
    {
        id: 4,
        coordination: '117.23065,31.854193',
        description: '这是四'
    },
]
const markerPoint: Array<any> = []

const map = shallowRef(null);
const initMap = (): void => {
    AMapLoader.load({
        key: '9360a439c5ab54cf94c920110fd77d1c',
        plugins: [''],
        version: ''
    }).then((AMap) => {
        map.value = new AMap.Map("mapContainer", {  //设置地图容器id
            viewMode: "3D",    //是否为3D地图模式
            zoom: 12,           //初始化地图级别
            center: [117.130896, 31.849721], //初始化地图中心点位置
        });
    }).catch(e => {
        console.log(e);
    })
}
const showMarkerPoint = (): void => {
    markerPoint.value = markerList.map((item) => {
        let list = [
            'https://img-blog.csdnimg.cn/20200706142039961.png',
            'https://www.pianshen.com/images/30/9a363cf6ac9b5d63780761128aff7c9e.png',
            'https://www.pianshen.com/images/190/ba44deb4ef11e40de0b5482d809946fe.png',
        ];
        let lng = item.coordination.split(',')[0];
        let lat = item.coordination.split(',')[1];
        let content = `<div class="point-box">
<swiperComponent :list="${list}"></swiperComponent>
                        <div class="point-description">${item.description}</div>
                        <div><image class="point-icon" src="${pointIcon}"></image></div>
                      </div>`;
        let marker = new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            content: content,
            offset: new AMap.Pixel(-100, -50),
            // style: [
            //     {
            //         icon: {
            //             size: [20,20],
            //             scaleFactor:2,//地图放大一级的缩放比例系数
            //             maxScale:2,//最大放大比例
            //             minScale:1//最小放大比例
            //         },
            //         label: {
            //
            //         }
            //     }
            // ]
        })
        marker.on('click', (e) => {
            console.log(e)
            console.log(item.id)
        })
        return marker
    })
    map.value.add(markerPoint.value);
}
const clearMarkerPoint = (): void => {
    map.value.remove(markerPoint.value)
};
onMounted(() => {
    initMap()
})

</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 100%;
}

#mapContainer {
    width: 100%;
    height: 100%;
}

.btn_box {
    position: absolute;
    bottom: 5%;
    right: 5%;
}
::v-deep .point-box {
    width: 200px!important;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .point-description {
        width: 100%;
        text-align: center;
    }
    .point-icon {
        width: 20px;
        height: 20px;
        margin-top: 8px;
    }
}

</style>
