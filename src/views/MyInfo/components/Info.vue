<template>
    <el-descriptions class="margin-top" title="个人简介" :column="2" size="large" border>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <user />
                    </el-icon>
                    头像
                </div>
            </template>
            <el-avatar size="large" @error="errorHandler">
                <img :src="$store.getters.getUserAvatar" />
            </el-avatar>
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <iphone />
                    </el-icon>
                    用户编号
                </div>
            </template>
            {{ $store.getters.getUserId }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <user />
                    </el-icon>
                    用户名
                </div>
            </template>
            {{ $store.getters.getUsername }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <location />
                    </el-icon>
                    密码
                </div>
            </template>
            ********
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <iphone />
                    </el-icon>
                    性别
                </div>
            </template>
            {{ $store.getters.getUserGender }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <tickets />
                    </el-icon>
                    年龄
                </div>
            </template>
            {{ $store.getters.getUserAge }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <office-building />
                    </el-icon>
                    QQ
                </div>
            </template>
            {{ $store.getters.getUserQQ }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <office-building />
                    </el-icon>
                    职业
                </div>
            </template>
            {{ $store.getters.getUserOccupation }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <office-building />
                    </el-icon>
                    积分
                </div>
            </template>
            {{ $store.getters.getUserIntegral }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <office-building />
                    </el-icon>
                    学习时长
                </div>
            </template>
            {{ $store.getters.getUserStudyTime }} H
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <office-building />
                    </el-icon>
                    注册时间
                </div>
            </template>
            {{ calcUserStudyTime }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <office-building />
                    </el-icon>
                    上一次更新
                </div>
            </template>
            {{ calcUserUpdateTime }}
        </el-descriptions-item>
        <el-descriptions-item label-align="center">
            <template #label>
                <div class="cell-item">
                    <el-icon style="large">
                        <office-building />
                    </el-icon>
                    个性签名
                </div>
            </template>
            {{ $store.getters.getUserSignature }}
        </el-descriptions-item>
    </el-descriptions>
</template>

<script>
export default {
    name: "Info",
    data() {
        return {

        }
    },
    methods: {
        convertTime(timeStamp) {
            let date = new Date()
            console.log(timeStamp)
            date.setTime(timeStamp / 1e6)
            return date.toLocaleString()
        }
    },
    computed: {
        calcUserStudyTime() {
            let timeStamp = this.$store.getters.getUserCreateTime
            return this.convertTime(timeStamp)
        },
        calcUserUpdateTime() {
            let timeStamp = this.$store.getters.getUserUpdateTime
            return this.convertTime(timeStamp)
        }
    }
}
</script>