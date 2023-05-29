<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="个人信息" name="info">
            <Info />
        </el-tab-pane>
        <el-tab-pane label="关注列表" name="follow-list">Nothing</el-tab-pane>
        <el-tab-pane label="粉丝列表" name="fans-list">Nothing</el-tab-pane>
        <el-tab-pane label="发帖列表" name="post-list">发帖列表</el-tab-pane>
    </el-tabs>
</template>
<script>
import Info from './Info.vue'
export default {
    name: "Tab",
    components: {
        Info
    },
    data() {
        return {
            activeName: "info"
        }
    }
}
</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
  