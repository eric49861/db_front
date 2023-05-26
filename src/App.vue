<template>
    <router-view name="app"/>
    <router-view name="login"/>
    <router-view name="signup"/>
    <router-view name="404"/>
</template>

<script>

export default {
    components: {
        
    },
    data() {
        return {
            show: true,
        }
    },
    mounted() {
        window.addEventListener("unload", this.saveState)
    },
    methods: {
        saveState() {
            //保存数据
            window.sessionStorage.setItem("state", JSON.stringify(this.$store.state.user))
        }
    }
};
</script>

<style>
.global-layout{
    text-align: center;
}
</style>
