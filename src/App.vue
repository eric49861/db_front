<template>
  <div class="global-layout">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  .global-layout{
    text-align: center;
  }
</style>
