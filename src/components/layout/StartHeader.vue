<template>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <div class="flex-grow"></div> 
        <el-sub-menu index="1">
            <template #title>介绍</template>
            <el-menu-item index="1-1" style="">学习小组</el-menu-item>
            <el-menu-item index="1-2">资源集成</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>关于</template>
            <el-menu-item index="2-1">反馈</el-menu-item>
            <el-menu-item index="2-2">作者</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">与我们联系</el-menu-item>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <el-button v-if="!loginStatus"  @click="loginFormVisible = true" round>登录</el-button>
        <el-button v-if="!loginStatus" @click="signupFormVisible = true" style="margin-right: 2vh" round>注册</el-button>
        <!-- 登录对话框 -->
        <el-dialog v-model="loginFormVisible" title="登录" width="400px">
            <el-form
                :rules="rules"
                :model="form"
                label-position="left"
                label-width="80px"
            >
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入用户名"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" autocomplete="off" type="password" placeholder="请输入密码"/>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="loginFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="loginSubmit">登录</el-button>
                </span>
            </template>
        </el-dialog>
        <!-- 注册对话框 -->
        <el-dialog v-model="signupFormVisible" title="注册" width="400px">
            <el-form
                :rules="rules"
                :model="form"
                label-position="left"
                label-width="80px"
            >
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入用户名"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" autocomplete="off" type="password" placeholder="请输入密码"/>
                </el-form-item>
                <!-- <el-form-item label="QQ">
                    <el-input v-model="signupForm.name" autocomplete="off" placeholder="绑定QQ"/>
                </el-form-item> -->
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="signupFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="signupSubmit">注册</el-button>
                </span>
            </template>
        </el-dialog>
    </el-menu>
</template>

<script>
export default {
    name: 'StartHeader',
    data() {
        return {
            loginStatus: false,
            loginFormVisible: false,
            signupFormVisible: false,
            repass: '',
            form: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                    { min: 3, max: 10, message: '用户名的长度应该在3~10之间', trigger: 'blur' },
                    { pattern: /^[\u4e00-\u9fa5a-zA-Z_-]*$/, message:'用户名不能包含特殊字符', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 8, max: 16, message: '密码的长度应该在8~16之间', trigger: 'blur' },
                    { pattern: /^[A-Za-z0-9]+$/, message: '密码需要同时包含英文和数字', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {

    },
    computed: {
        activeIndex() {
            return 0
        }
    }
}
</script>

<style scoped>

.flex-grow {
    flex-grow: 1;
}
.el-menu{
    font-weight: bold;
    background-color: transparent;
    align-items: center;
}
.el-menu--horizontal{
    border-bottom: 0;
}

.el-menu--horizontal>.el-sub-menu.is-active /deep/ .el-sub-menu__title{
    border-bottom-width: 0;
}

 .el-menu--horizontal>.el-sub-menu /deep/ .el-sub-menu__title:hover{
    background-color: transparent;
}

.el-menu--horizontal>.el-sub-menu.is-active /deep/ .el-sub-menu-item:hover{
    background-color: transparent;
}
.el-menu--horizontal>.el-menu-item.is-active /deep/{
    border-bottom-color: transparent;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal /deep/ .el-menu-item:not(.is-disabled):hover{
    background-color: transparent;
}


</style>