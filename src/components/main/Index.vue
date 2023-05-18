<template>
    <div class="welcome-container">
        <el-card class="box-card">
            <vuetyped :strings="['学习需要坚持不懈的努力和持续的探索!' + '<br/>' + '欢迎回来！' + username]" :loop="false" :smart-backspace="true">
                <h1 class="typing" />
            </vuetyped>
        </el-card>
    </div>
    <el-container>
        <el-aside>
            <div class="calendar">
                <Calendar
                    backgroundText
                    class-name="select-mode"
                    :select-date="today"
                    :remarks="remarks"
                />
            </div>
            
        </el-aside>
        <el-main>
            <div>
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="正在进行" name="first">User</el-tab-pane>
                    <el-tab-pane label="已完成" name="second">Config</el-tab-pane>
                    <el-tab-pane label="学习历史" name="third">Role</el-tab-pane>
                </el-tabs>
            </div>
        </el-main>
    </el-container>
</template>



<script>
import Calendar from 'mpvue-calendar'
import { ref } from 'vue'

export default {
    name: "Index",
    components: {
        Calendar,
    },
    data() {
        return {
            username: "ERIC",
        }
    },
    computed: {
        time() {
            return new Date()
        },
        today() {
            let now = new Date()
            let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
            return ref(date)
        }
    }
}
</script>


<style scoped>
.box-card {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(178, 209, 236, 0.473);
}

.welcome-container{
    display: flex;
    justify-content: center;
}

.calendar{
    padding: 20px 0;
}
</style>