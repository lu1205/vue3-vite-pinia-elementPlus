<template>
    <div></div>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent} from "vue"

export default defineComponent({
    setup() {
        const dataMap = reactive({
            active: 0,
            searchValue: '',
        })
        return {...toRefs(dataMap)}
    }
})


</script>
<style scoped lang="less">

</style>
