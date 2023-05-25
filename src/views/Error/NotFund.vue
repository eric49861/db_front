<template>
    <div class="not-found">
        <el-card>
            <div class="title">404</div>
            <div class="description">页面未找到</div>
            <div class="back-home">
                <el-button type="primary" @click="goHome">返回首页</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push("/")
        },
    },
};
</script>

<style scoped>
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.title {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}

.description {
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
}

.back-home {
    text-align: center;
}</style>
