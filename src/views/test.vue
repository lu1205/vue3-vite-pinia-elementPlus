<template>
<!--    <div @click="handle">2132</div>-->
<!--    <div @click="handle2">2132</div>-->


    <div class="wrap">
        <!-- 把图片放进一个盒子里 设置相对定位 -->
        <div class="imgList">
            <img src="../../static/img/img.png" alt="">
            <img src="../../static/img/defaultIcon.png" alt="">
            <img src="../../static/img/point_icon.png" alt="">
        </div>
        <!-- 缩略图 -->
        <div class="smallImg">
            <img src="../../static/img/img.png" alt="">
            <img src="../../static/img/defaultIcon.png" alt="">
            <img src="../../static/img/point_icon.png" alt="">
        </div>
        <!-- 左右方向按键 -->
        <div class="fx">
            <div class="left"> before </div>
            <div class="right"> > </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import _ from "lodash"

const throttle2 = (func: Function, delay: number) => {
    let timeout: any = null;
    return () => {
        timeout && clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(this)
        }, delay)
    }
}
const handle = throttle2(function () {
    console.log(12)
}, 500)
const handle2 = _.throttle(function () {
    console.log(12)
}, 500)


</script>

<style>
.wrap {
    overflow: hidden;
    width: 1000px;
    position: relative;
    margin: 0 auto;
}
.imgList {

    display: flex;
    position: relative;
    left: 0;
    transition: 0.5s ease;
}
.imgList img {
    width: 1000px;
    height: 100%;
}

.smallImg {
    position: absolute;
    top: 80%;
    left: 30%;
}
.smallImg img {
    width: 100px;
    height: 100%;
    filter: brightness(120%);
}
.smallImg img:first-child{
    filter: grayscale(90%);
}

.fx{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 40%;
}
.left, .right{
    width: 50px;
    height: 70px;
    line-height: 70px;
    background-color: rgba(0, 0, 0,.5);
    text-align: center;
    color: white;
}
</style>
