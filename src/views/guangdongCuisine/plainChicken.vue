<template>
    <div>白切鸡</div>
    <div class="formData">
        <n-form ref="formRef" label-placement="left" :model="formData" :rules="rules" :label-width="140">
            <n-form-item label="姓名" path="name">
                <n-input v-model:value="formData.name" placeholder="输入姓名" />
            </n-form-item>
            <n-form-item label="手机号" path="tel">
                <n-input v-model:value="formData.tel" placeholder="输入手机号" />
            </n-form-item>
            <n-form-item label="爱好" path="hobby">
                <n-select v-model:value="formData.selectedHobbyList" multiple filterable placeholder="选择爱好"
                    label-field="name" value-field="name" :options="hobbyList" />
            </n-form-item>
            <n-form-item label="运动计划时间范围">
                <n-date-picker v-model:value="formData.sportTime" type="daterange" format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd HH:mm:ss" clearable @confirm="handleSportTime" />
            </n-form-item>
            <n-form-item>
                <n-space>
                    <n-button attr-type="button">
                        取消
                    </n-button>
                    <n-button attr-type="button" @click="submit">
                        提交
                    </n-button>
                </n-space>
            </n-form-item>
        </n-form>
    </div>
</template>

<script lang="ts" setup>
import { log } from 'console'
import dayjs from 'dayjs'
import { FormInst } from 'naive-ui'
import { reactive, ref } from "vue"
const size = ref(0)
const formRef = ref<FormInst | null>(null)
const formData = reactive({
    name: "",
    tel: '',
    selectedHobbyList: <any>[],
    sportTime: [0, Date.now()],
})
const rules = ref({
    name: {
        required: true,
        min: 2,
        message: '姓名最小长度为2',
    },
    tel: {
        required: true,
        message: '请输入手机号'
    },
/*     hobby: {
        type: 'array',
        required: true,
        message: '请选择爱好',
        validator: (rule: any, value: any,callback: any) => {
            console.log('value', value);
            // if (!value) { return new Error("请选择爱好") }
            if (!value) { return false }
            return true
        },
    }, */
})
const submit = () => {
    formRef.value?.validate((err) => {
        if (!err) {
            console.log("校验通过");
        } else {
            console.log("校验未通过");
        }
    })
}

const hobbyList = reactive([
    {
        id: 1,
        name: '下棋',
    },
    {
        id: 2,
        name: '画画',
    },
])

const handleSportTime = (date: number | number[]) => {
    console.log(date)
}

</script>

<style lang="scss" scoped>
.formData {
    width: 50vw;
    margin: 0 auto;
}
</style>
