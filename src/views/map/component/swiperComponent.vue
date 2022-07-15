<template>
    <div class="container">
        <swiper class="swiperBox" :options="swiperOption">
            <swiper-slide class="swiperUnit" v-for="(item,index) in list" :key="index">
                <img class="swiper-img" :src="item" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {swiper, swiperSlide} from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
    name: "swiperComponent",
    props: ['list'],
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                direction: 'horizontal',
                slidesPerView: 1,
                on: {
                    click: function (e) {
                        if(this.clickedIndex !== undefined){
                            // vm.$emit("eventDetails", vm.data[this.clickedIndex].id, vm.data[this.clickedIndex].longitude, vm.data[this.clickedIndex].latitude)
                        }
                    }
                }
            },
        }
    },
    components: {
        swiper,
        swiperSlide,
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped lang="less">

/deep/ .container {
    width: 264px!important;
    height: 148px!important;
}
/deep/ .swiperBox {
    width: 264px!important;
    height: 148px!important;
}
/deep/ .swiperUnit {
    width: 264px!important;
    height: 148px!important;
}
/deep/ .swiper-img {
    width: 264px!important;
    height: 148px!important;
}
</style>
