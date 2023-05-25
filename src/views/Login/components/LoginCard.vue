<template>
    <div class="login-card-container">
        <el-card class="login-card">
            <div class="logo">
                <img src="../../../assets/LOGO.png" alt="logo">
            </div>
            <el-form label-position="left" label-width="70px" :model="form" :rules="rules" ref="form">
                <el-form-item label="用户名" prop="username"
                    :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 1, max: 10, message: '用户名长度不超过10个字符', trigger: 'blur' }]">
                    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password"
                    :rules="[{ required: true, validator: validatePassword, trigger: 'blur' }]">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <div class="btn-container">
                    <el-form-item>
                        <div class="flex-grow"></div>
                        <el-button type="primary" @click="cancel">取消</el-button>
                        <div class="flex-grow"></div>
                        <el-button type="primary" @click="login">登录</el-button>
                        <div class="flex-grow"></div>
                    </el-form-item>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import api from '../../../api/api.js'

export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 1, max: 10, message: '用户名长度不超过10个字符', trigger: 'blur' }],
                password: [{ validator: this.validatePassword, trigger: 'blur' }],
            },
        };
    },
    methods: {
        login() {
            let that = this
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // TODO: 发送网络请求，执行登录请求
                    api.login(this.form)
                        .catch((error) => {
                            //如果登录失败，根据返回值确定是用户不存在或者密码错误
                            //使用消息提示组件提示用户
                            console.log("error", error)
                        }).then(function(res) {
                            console.log("res:", res)
                            //将返回的用户数据存入store
                            let user = JSON.parse(res.data)["user"]
                            that.$store.dispatch("asyncUpdateUser", user)
                            //成功登录后跳转到主页
                            that.$router.push("/index")
                        })
                }
            });
        },
        cancel() {
            //点击取消按钮，返回到开始页面
            this.$router.push("/")
        },
        validatePassword(rule, value, callback) {
            if (!value) {
                callback(new Error('请输入密码'));
            } else if (value.length < 8 || value.length > 16) {
                callback(new Error('密码长度应在8-16个字符之间'));
            } else if (/[\u4e00-\u9fa5]/.test(value)) {
                callback(new Error('密码不能包含中文字符'));
            } else {
                callback();
            }
        },
    },
};
</script>

<style scoped>
.flex-grow{
    flex-grow: 1;
}
.login-card {
    width: 400px;
    text-align: center;
    border-radius: 5%;
}
.logo{
    margin-bottom: 10px;
}
.logo > img{
    width: 30%;
}
.login-card-container{
    background-color: rgba(255, 255, 255, 0.497);

}
</style>