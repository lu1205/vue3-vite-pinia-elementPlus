<template>
    <div>{{ info.title }}</div>
    <el-button @click="getTitle">Default</el-button>
</template>

<script lang="ts" setup>
import {computed, reactive, toRefs} from "vue";

const info = reactive({
    title: '烤乳猪11'
})
const getTitle = ()=>{
    console.log(info.title);
}

</script>

<style>
</style>
