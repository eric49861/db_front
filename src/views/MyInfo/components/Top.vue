<template>
    <el-card shadow="always">
        <el-row :gutter="20">
            <el-col :span="2" class="col-avatar center">
                <div class="avatar">
                    <el-avatar size="large" @error="errorHandler">
                        <img :src="$store.getters.getUserAvatar" />
                    </el-avatar>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="simple-info">
                    <span class="simple-info-username">{{ $store.getters.getUsername }}</span>
                    <span class="simple-info-signature">{{ $store.getters.getUserSignature }}</span>
                    <el-button @click="dialogShow = true" type="primary" text>编辑资料</el-button>
                    <!-- 修改个人信息的对话框 -->
                    <el-dialog v-model="dialogShow" title="编辑个人资料" width="50%">
                        <div>
                            <el-form :model="form" label-width="120px">
                                <el-form-item label="用户名">
                                    <el-input v-model="form.username" />
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input type="password" v-model="form.password" disabled />
                                </el-form-item>
                                <el-form-item label="年龄">
                                    <el-input-number v-model="form.age" :min="0" :max="150" />
                                </el-form-item>
                                <el-form-item label="性别">
                                    <el-radio-group v-model="form.gender">
                                        <el-radio label="男" size="large">男</el-radio>
                                        <el-radio label="女" size="large">女</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="职业">
                                    <el-input v-model="form.occupation" />
                                </el-form-item>
                                <el-form-item label="个性签名">
                                    <el-input v-model="form.signature" type="textarea" />
                                </el-form-item>
                            </el-form>
                        </div>
                        <template #footer>
                            <span class="dialog-footer">
                                <el-button @click="cancel" text>取消</el-button>
                                <el-button type="primary" @click="updateUserInfo" text>
                                    保存
                                </el-button>
                            </span>
                        </template>
                    </el-dialog>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="placeholder" />
            </el-col>
            <el-col :span="3" class="center">
                <el-statistic title="学习时间" :value="$store.getters.getUserStudyTime + 'H'" />
            </el-col>
            <el-col :span="3" class="center">
                <el-statistic title="粉丝" :value="0" />
            </el-col>
            <el-col :span="3" class="center">
                <el-statistic title="关注" :value="0" />
            </el-col>
            <el-col :span="3" class="center">
                <el-statistic title="积分" :value="$store.getters.getUserIntegral" />
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    name: "Top",
    components: {

    },
    data() {
        return {
            dialogShow: false,
            form: {
                username: this.$store.getters.getUsername,
                password: this.$store.getters.getUserPassword,
                gender: this.$store.getters.getUserGender,
                age: this.$store.getters.getUserAge,
                occupation: this.$store.getters.getUserOccupation,
                signature: this.$store.getters.getUserSignature
            }
        }
    },
    methods: {
        cancel() {
            this.dialogShow = false
            //恢复数据
            this.form.username = this.$store.getters.getUsername
            this.form.password = this.$store.getters.getUserPassword
            this.form.gender = this.$store.getters.getUserGender
            this.form.age = this.$store.getters.getUserAge
            this.form.occupation = this.$store.getters.getUserOccupation
            this.form.signature = this.$store.getters.getUserSignature
        },
        updateUserInfo() {
            this.dialogShow = false
            //调用方法
            this.$store.dispatch("asyncModifyUserInfo", this.form)
        },
        // TODO:添加表单校验
        validateForm() {

        },

    }
}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.simple-info-username {
    font-weight: 800;
    margin-bottom: 10px;
}

.simple-info-signature {
    margin-bottom: 10px;
}

.simple-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>