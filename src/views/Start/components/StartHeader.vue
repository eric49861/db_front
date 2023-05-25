<template>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <div class="flex-grow"></div> 
        <el-sub-menu index="1">
            <template #title>介绍</template>
            <el-menu-item index="1-1" style="">学习小组</el-menu-item>
            <el-menu-item index="1-2">资源集成</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>关于</template>
            <el-menu-item index="2-1">反馈</el-menu-item>
            <el-menu-item index="2-2">作者</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">与我们联系</el-menu-item>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <el-button @click="toLogin" round>登录</el-button>
        <el-button @click="toSignup" style="margin-right: 2vh" round>注册</el-button>
    </el-menu>
</template>

<script>
export default {
    name: 'StartHeader',
    data() {
        return {
        }
    },
    methods: {
        toLogin() {
            this.$router.push("/login")
        },
        toSignup() {
            this.$router.push("/signup")
        }
    },
    computed: {
        activeIndex() {
            return 0
        }
    }
}
</script>

<style scoped>

.flex-grow {
    flex-grow: 1;
}
.el-menu{
    font-weight: bold;
    background-color: transparent;
    align-items: center;
}
.el-menu--horizontal{
    border-bottom: 0;
}

.el-menu--horizontal>.el-sub-menu.is-active /deep/ .el-sub-menu__title{
    border-bottom-width: 0;
}

 .el-menu--horizontal>.el-sub-menu /deep/ .el-sub-menu__title:hover{
    background-color: transparent;
}

.el-menu--horizontal>.el-sub-menu.is-active /deep/ .el-sub-menu-item:hover{
    background-color: transparent;
}
.el-menu--horizontal>.el-menu-item.is-active /deep/{
    border-bottom-color: transparent;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal /deep/ .el-menu-item:not(.is-disabled):hover{
    background-color: transparent;
}


</style>