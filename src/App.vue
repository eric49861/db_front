<template>
    <router-view name="app"/>
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
