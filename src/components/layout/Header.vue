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
    <el-menu-item index="5" v-if="!loginStatus">登录</el-menu-item>
    <el-menu-item index="6" v-if="!loginStatus">注册</el-menu-item>
  
  </el-menu>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Header',
    data() {
        return {
          activeIndex: ref('1'),
          loginStatus: false,
          centerDialogVisiable: false
        }
    },
    methods: {
      handleSelect: function (index) {
          if (index == 5 || index == 6) {
            this.centerDialogVisiable = true
          }
          this.activeIndex.value = index
        }
    }
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>