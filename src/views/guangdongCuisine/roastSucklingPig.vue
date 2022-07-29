<template>
    <div class="search_box">
        <div class="search_item">
            <el-input v-model="search[0].name" placeholder="请输入姓名" />
        </div>
        <div class="search_item">
            <el-input v-model="searchForm.name" placeholder="请输入姓名" />
        </div>
        <div class="search_item">
            <el-select v-model="searchForm.gender" class="m-2" placeholder="请选择性别" size="large">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
            </el-select>
        </div>
        <div>
            <el-button type="primary" size="large" @click="filterTableData">搜索</el-button>
        </div>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="gender" label="性别" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="address" label="地址" />
    </el-table>
</template>

<script lang="ts" setup>
import { computed, reactive, toRefs, ref, nextTick, isReactive } from "vue";

const sourceTableData = [
    {
        id: 1,
        name: '张三',
        gender: '男',
        age: 24,
        address: '安徽',
    },
    {
        id: 2,
        name: '刘雨',
        gender: '女',
        age: 22,
        address: '浙江',
    },
]

let tableData = reactive([
    {
        id: 1,
        name: '张三',
        gender: '男',
        age: 24,
        address: '安徽',
    },
    {
        id: 2,
        name: '刘雨',
        gender: '女',
        age: 22,
        address: '浙江',
    },
])

let searchForm = reactive({
    name: '',
    gender: '',
})
let search = reactive([{ name: '' }])
const filterTableData = () => {
    search = [{ name: 'zs' }, { name: '' }]
    tableData = [{
        id: 2,
        name: '刘雨',
        gender: '女',
        age: 22,
        address: '浙江',
    }]
    console.log(tableData);



    // let tableData2 = sourceTableData.filter((item:any) => {
    //     if (item.name.includes(searchForm.name) && item.gender === searchForm.gender) {
    //         return item
    //     }
    // })
    // tableData = tableData2
    // console.log(isReactive(tableData));



    // console.log(tableData2 === tableData);
    // tableData = []

}

</script>

<style lang="scss" scoped>
:deep(.el-input__inner) {
    height: 40px;
}

.search_box {
    display: flex;
    align-items: center;
    padding: 16px 0 16px 16px;
    box-sizing: border-box;

    .search_item {
        margin-right: 10px;
    }
}
</style>
