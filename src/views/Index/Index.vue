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
            <div class="data-statistic">
                <el-card shadow="always">
                    <DataStatistic :days="info.days" :studyTime="info.studyTime" :rank="info.rank"/>
                </el-card>
            </div>
        </el-aside>
        <el-main>
            <div>
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="正在进行" name="going">
                        <div class="going-container group-container">
                            <span class="one-group-container" v-for="i in going.totals" :key="going.groups[i-1].id">
                                <StudyGroup
                                :topic="going.groups[i-1].topic"
                                :title="going.groups[i - 1].title"
                                :startTime="going.groups[i - 1].startTime"
                                :endTime="going.groups[i - 1].endTime"
                                :type="going.groups[i - 1].type"
                                :goal="going.groups[i - 1].goal"/>
                            </span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="已完成" name="finished">
                        <div class="finished-container group-container">
                            <span class="one-group-container" v-for="i in finished.totals" :key="going.groups[i - 1].id">
                                <StudyGroup
                                :topic="finished.groups[i - 1].topic"
                                :title="finished.groups[i - 1].title"
                                :startTime="finished.groups[i - 1].startTime"
                                :endTime="finished.groups[i - 1].endTime"
                                :type="finished.groups[i - 1].type"
                                :goal="finished.groups[i - 1].goal"/>
                            </span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="学习历史" name="history">
                        <div class="history-container group-container">
                            <span class="one-group-container" v-for="i in history.totals" :key="going.groups[i - 1].id">
                                <StudyGroup
                                :topic="history.groups[i - 1].topic"
                                :title="history.groups[i - 1].title"
                                :startTime="history.groups[i - 1].startTime"
                                :endTime="history.groups[i - 1].endTime"
                                :type="history.groups[i - 1].type"
                                :goal="history.groups[i - 1].goal"/>
                            </span>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-main>
    </el-container>
</template>



<script>
import Calendar from 'mpvue-calendar'
import StudyGroup from './components/StudyGroup.vue'
import DataStatistic from './components/DataStatistic.vue'

import { ref } from 'vue'

export default {
    name: "Index",
    components: {
        Calendar,
        StudyGroup,
        DataStatistic
    },
    data() {
        return {
            username: "ERIC",
            activeName: ref("going"),
            going: {
                totals: 4,
                groups: [
                    { id: 1, title:"冲冲冲1号", topic: "计算机网络", startTime: "2023/5/19", endTime: "2023/5/19", type: 'cs', state: 1 , goal: "了解计算机网络的结构"},
                    { id: 2, title: "冲冲冲2号", topic: "操作系统", startTime: "2023/5/19", endTime: "2023/5/19", type: 'cs', state: 1, goal: "了解计算机操作系统原理" },
                    { id: 3, title: "冲冲冲3号", topic: "数据结构与算法", startTime: "2023/5/19", endTime: "2023/5/19", type: 'cs', state: 1, goal: "学习数据结构与算法" },
                    { id: 4, title: "冲冲冲4号", topic: "计算机组成原理", startTime: "2023/5/19", endTime: "2023/5/19", type: 'cs', state: 1, goal: "计算机组成原理" }
                ]
            },
            finished: {
                totals: 2,
                groups: [
                    { id: 1, title: "冲冲冲5号", topic: "算法(Ed4)", startTime: "2023/5/19", endTime: "2023/5/19", type: 'cs', state: 0, goal: "以《算法》第四版为教材，系统了解算法设计方法"},
                    { id: 2, title: "冲冲冲6号", topic: "深入理解计算机系统", startTime: "2023/5/19", endTime: "2023/5/19", type: 'cs', state: 0, goal: "csapp" },
                ]
            },
            history: {
                totals: 1,
                groups: [
                    { id: 1, title: "冲冲冲7号", topic: "数据库系统", startTime: "2023/5/19", endTime: "2023/5/19", type: 'cs', state: 0, goal: "学习数据库底层结构原理" },
                ]
            },
            info: {
                days: 1000,
                studyTime: 136.5,
                rank: 1000
            }
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab)
            console.log(event)
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
    height: 106px;
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

 .group-container{
    display: flex;
    flex-wrap: wrap;
}

.one-group-container{
    margin: 5vh 5vh;
    display: inline-block;
}
.data-statistic{
    margin-top: 0vh;
}
</style>