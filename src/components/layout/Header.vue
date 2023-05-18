<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0" disabled style="color:white; font-weight: 800;">
            LOGO
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/square">广场</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/zone">动态</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/activity">活动</router-link></el-menu-item>
        <div class="flex-grow" />
    </el-menu>
</template>

<script>

export default {
    components: {},
    name: 'Header',
    
    data() {
        return {
            routeToIndex: {
                '/index': '1',
                '/square': '2',
                '/zone': '3',
                '/activity': '4'
            },
            
        }
    },
    methods: {
        getIndex: function () {
            const path = this.$router.currentRoute.value.path
            return this.routeToIndex[path]
        },
        handleSelect: function (index) {
            console.log(index)
        },
        loginSubmit: function () {
            //todo: 提交表单，成功后关闭对话框
            this.loginFormVisible = false
        },
        signupSubmit: function () {
            //todo: 提交表达，成功后关闭对话框
            this.signupFormVisible = false
        }
    },
    computed: {
        activeIndex() {
            return this.getIndex()
        }
    }
}
</script>

<style scoped>
.el-menu{
    align-items: center;
    background-color: #ffffff;
}
.flex-grow {
  flex-grow: 1;
}
</style>