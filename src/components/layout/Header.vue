<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">广场</el-menu-item>
    <el-menu-item index="3">动态</el-menu-item>
    <el-menu-item index="4">活动</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="5" v-if="!loginStatus" >登录</el-menu-item>
    <el-menu-item index="6" v-if="!loginStatus">注册</el-menu-item>
    <Login :loginVisiable="loginVisiable" @cancel="cancelLogin"/>
  </el-menu>
</template>

<script>
import Login from '../login/Login.vue';

export default {
  components: { Login },
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      loginStatus: false,
      loginVisiable: false,
      signVisiable: false,
    }
  },
  methods: {
    handleSelect: function (index) {
      switch (index) {
        case '5': {
          console.log(5)
          this.loginVisiable = true;
          break;
        }
        case '6': {
          console.log(6)
          this.signVisiable = true;
          break;
        }
        default: {
          this.activeIndex.value = index
        }
      }
    },
    cancelLogin: function () {
      this.loginVisiable = false
    }
  }
}
    
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>