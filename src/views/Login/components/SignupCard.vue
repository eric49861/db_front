<template>
    <div class="signup-card-container">
        <el-card class="signup-card">
            <div class="logo">
                <img src="../../../assets/LOGO.png" alt="logo">
            </div>
            <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="card-form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model.trim="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model.trim="form.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword">
                    <el-input type="password" v-model.trim="form.confirmPassword"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="male">男</el-radio>
                        <el-radio label="female">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="QQ">
                    <el-input v-model.trim="form.qq"></el-input>
                </el-form-item>
                <div class="btn-container">
                    <el-form-item>
                        <div class="flex-grow"></div>
                        <el-button type="primary" @click="cancel">取消</el-button>
                        <div class="flex-grow"></div>
                        <el-button type="primary" @click="signup">注册</el-button>
                        <div class="flex-grow"></div>
                    </el-form-item>
                </div>
            </el-form>
        </el-card>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                confirmPassword: '',
                gender: 'male',
                qq: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 10, message: '用户名长度为1~10个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 8, max: 16, message: '密码长度为8~16个字符', trigger: 'blur' },
                    { pattern: /^[^\u4e00-\u9fa5]+$/, message: '密码不能包含中文字符', trigger: 'blur' }
                ],
                confirmPassword: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value !== this.form.password) {
                                callback(new Error('两次输入的密码不一致'))
                            } else {
                                callback()
                            }
                        },
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        cancel() {
            this.$router.back()
        },
        signup() {
            let that = this
            this.$refs.form.validate(valid => {
                if (valid) {
                    //执行注册请求
                    that.$store.dispatch("asyncSignup", that.form)
                } else {
                    // 表单验证失败
                    console.log('表单验证失败')
                }
            })
        }
    }
}
</script>
  
<style scoped>
.flex-grow {
    flex-grow: 1;
}

.signup-card {
    width: 400px;
    text-align: center;
    border-radius: 5%;
}

.card-header {
    font-size: 16px;
    font-weight: bold;
}

.card-form {
    margin-top: 20px;
}

.logo {
    margin-bottom: 10px;
}

.logo>img {
    width: 30%;
}

.signup-card-container {
    background-color: rgba(255, 255, 255, 0.497);
}
</style>