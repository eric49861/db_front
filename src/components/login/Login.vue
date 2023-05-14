<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="Warning"
    width="30%"
    align-center
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ref } from 'vue'
export default{
    name: "Login",
    props:{
        centerDialogVisible:{
            type: Boolean,
            required: true            
        }
    ,
    data(){
        return{
            
        }
    }

}

</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>