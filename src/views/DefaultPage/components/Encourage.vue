<template>
    <div class="card-container">
        <el-card class="encourage-card" shadow="always">
            <vuetyped :strings="statement" :loop="false" :smart-backspace="true">
                <div class="typing"></div>
            </vuetyped>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Encourage",
    data() {
        return {
            statement: [`学习需要不断的坚持与探索, 欢迎回来 ${this.$store.getters.getUser.name}`]
        }
    }
}
</script>

<style scoped>
.card-container{
    border-radius: 10px;
    font-weight: bolder;
    font-size: 2rem;
}
.encourage-card{
    width: 100%;
    height: 105px;
    background-color: rgb(123, 123, 238);
    display: flex;
    justify-content: center;
    align-items: center;
}
.typing{
    white-space: pre-line;
}
</style>