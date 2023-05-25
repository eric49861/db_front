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
