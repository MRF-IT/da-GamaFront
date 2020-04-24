<template>
    <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ['breadcrumb']
}
</script>
<style scoped>
    .breadcrumb {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid #E1E5E6;
    }
</style>