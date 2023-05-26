<template>
    <div class="error-page">
        <h1>500 Internal Server Error</h1>
        <p>Sorry, something went wrong on our end. We're working to fix the issue as soon as possible.</p>
        <el-button type="primary" @click="goHome">Go to Homepage</el-button>
    </div>
</template>
  
<script>
export default {
    name: "ServerError",
    methods: {
        goHome() {
            this.$router.back()
        }
    }
}
</script>
  
<style>
.error-page {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 50px;
    margin-bottom: 20px;
}

p {
    font-size: 20px;
    margin-bottom: 30px;
}
</style>
  