<template>
    <el-row justify="center">
        <div class="statistic-card">
            <el-statistic :value="days">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                        Days
                    </div>
                </template>
            </el-statistic>
        </div>
    </el-row>
    <el-row justify="center">
        <div class="statistic-card">
            <el-statistic :value="studyTime">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                        学习时间
                    </div>
                </template>
            </el-statistic>
        </div>
    </el-row>
    <el-row justify="center">
        <el-col :span="8">
            <div class="statistic-card">
                <el-statistic :value="rank" title="全站排名">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            全站排名
                        </div>
                    </template>
                </el-statistic>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "DataStatistic",
    props: {
        days: Number,
        studyTime: Number,
        rank:Number
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
    background-color: var(--el-fill-color) !important;
}

.el-statistic {
    --el-statistic-content-font-size: 28px;
}

.statistic-card {
    height: 100%;
    padding: 20px;
    border-radius: 4px;
    background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 16px;
}

.statistic-footer .footer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.statistic-footer .footer-item span:last-child {
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
}

.green {
    color: var(--el-color-success);
}

.red {
    color: var(--el-color-error);
}
</style>