<template>
  <el-dialog v-model="loginFormVisible" title="登录">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" type="password"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="loginSubmit">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
</template>

<script>
export default{
  name: "Login",
  props:{
    loginVisiable:{
      type: Boolean,
      required: true,          
    }
  },
  data(){
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    loginSubmit: function () {
      console.log("confirm")
      //TODO: 发送网络请求进行登录
    },
    cancel: function () {
      console.log("cancel")
      this.$emit("cancel")
    }
  },
  computed: {
    loginFormVisible() {
      console.log("compute")
      return this.loginVisiable
    }
  }
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>