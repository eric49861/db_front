<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @select="selectHandler">
        <el-menu-item index="0">
            
            <el-tooltip
                :disabled="disabled"
                :content="$store.getters.getUser.name"
                placement="bottom"
                effect="light">

                <div class="avatar" v-show="!isCollapse">
                    <el-avatar :size="60" src="https://empty" @error="errorHandler">
                        <img
                            :src="$store.getters.getUser.avatar"/>
                    </el-avatar>
                </div>

            </el-tooltip>
            
        </el-menu-item>

        <div class="flex-grow"/>
        <el-menu-item index="1">
            <el-icon><Promotion /></el-icon>
            <template #title>首页</template>
        </el-menu-item>

        <el-menu-item index="2">
            <el-icon><Search /></el-icon>
            <template #title>探索</template>
        </el-menu-item>

        <el-menu-item index="3">
            <el-icon><View /></el-icon>
            <template #title>空间</template>
        </el-menu-item>

        <el-menu-item index="4">
            <el-icon><Share /></el-icon>
            <template #title>活动</template>
        </el-menu-item>

        <el-menu-item index="5">
                <el-icon>
                    <User />
                </el-icon>
                <template #title>我的</template>
            </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="6" @click="isCollapse = !isCollapse">
            <el-icon>
                <ArrowRight v-show="isCollapse"/>
                <ArrowLeft v-show="!isCollapse"/>
            </el-icon>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"SideBar",
    components: {
    },
    data() {
        return {
            isCollapse: ref(true),
        }
    },
    methods: {
        selectHandler(key, keyPath) {
            console.log(key, ": ", keyPath)
            switch(key){
                case '1':
                    this.$router.push("/index/default-page")
                    break
                case '2':
                    this.$router.push("/index/find-group")
                    break
                case '3':
                    this.$router.push("/index/zone")
                    break
                case '4':
                    this.$router.push("/index/activity")
                    break
                case '5':
                    this.$router.push("/index/me")
                    break
                default:
                    //do nothing
            }
        }
    }
}
</script>

<style>
.flex-grow{
    flex-grow: 1;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100px;
    min-height: 400px;
}
.el-menu-vertical-demo{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.avatar{
    margin-top: 5px;

}
</style>