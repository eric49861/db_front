<template>
    <div class="global-layout">
        <el-container>
            <el-header style="padding: 0 0px;" v-show="show">
                <Header/>
            </el-header>
            <el-main style="padding: 0 0px;">
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Header from '../src/components/Header.vue'
export default {
    components: {
        Header
    },
    data() {
        return {
            show: true,
        }
    },
     watch: {
         '$route'(to) {
             if (to.path == '/') {
                this.show = false
             } else {
                this.show = true
            }
        }
    }

};
</script>

<style>
.global-layout{
    text-align: center;
}
</style>
