<template>
    <el-card :body-style="{ padding: '20px' }">
        <div class="info-item">
            <div class="info-label">Name:</div>
            <div class="info-value">{{ name }}</div>
        </div>
        <div class="info-item">
            <div class="info-label">Age:</div>
            <div class="info-value">{{ age }}</div>
        </div>
        <div class="info-item">
            <div class="info-label">Email:</div>
            <div class="info-value">{{ email }}</div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'StudyGroup',
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.info-item {
    display: flex;
    margin-bottom: 10px;
}

.info-label {
    font-weight: bold;
    margin-right: 10px;
}

.info-value {
    flex: 1;
}
</style>