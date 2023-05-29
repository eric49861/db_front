<template>
    <div class="user-info">
        <div class="info-top">
            <Top />
        </div>
        <div class="info-main">
            <Tab />
        </div>
    </div>
</template>

<script>
import Top from './components/Top.vue'
import Tab from './components/Tab.vue'
export default {
    name: "MyInfo",
    components: {
        Top,
        Tab
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.info-top {
    margin-bottom: 10px;
}
</style>