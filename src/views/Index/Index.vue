<template>
    <div class="index-page">
        <el-container>
            <SideBar/>
            <el-main>
                <router-view name="index"></router-view>
            </el-main>
        </el-container>
    </div>
</template>



<script>
// import Calendar from 'mpvue-calendar'
import SideBar from './components/SideBar.vue'

export default {
    name: "Index",
    components: {
       SideBar
    },
    data() {
        
    }
}
</script>


<style scoped>
</style>