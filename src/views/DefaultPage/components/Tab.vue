<template>
    <div class="tab-container">
        <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
            <el-tab-pane label="正在进行" name="ing">
                <div class="ing-container group-container">
                    <StudyGroup :group="groupIng"/>
                </div>
            </el-tab-pane>
            <el-tab-pane label="已结束" name="ed">
                <div class="ed-container group-container">

                </div>
            </el-tab-pane>
            <el-tab-pane label="全部" name="all">
                <div class="all-container group-container">

                </div>
            </el-tab-pane>
            <el-tab-pane label="我创建的" name="mine">
                <div class="mine-container group-container">

                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import StudyGroup from './StudyGroup.vue'
import api from '../../../api/api'


export default {
    name: "Tab",
    components: {
        StudyGroup,
    },
    data() {
        return {
            activeName: "ing",
            groupIng: {},
            // groupEd:,
        }
    },
    methods: {
        handleClick(tab) {
            let tabName = tab.props.name
            switch (tabName) {
                case "ing": {
                    let that = this
                    //todo:通过网络获取正在进行的小组
                    api.getIngGroup().then(function (res) {
                        let data = res.data
                        that.groupIng = data[0]
                    })
                    break
                }
                case "ed": {
                    //todo:通过网络获取已经结束的小组
                    api.getEdGroup().then(function (res) {
                        console.log(res)
                    })
                    break
                }
                case "all": {
                    //todo:通过网络获取所有的小组
                    api.getAllGroup().then(function (res) {
                        console.log(res)
                    })
                    break
                }
                case "mine": {
                    //todo:通过网络获取我创建的小组
                    api.getMyGroup().then(function (res) {
                        console.log(res)
                    })
                    break
                }
            }
        }
    },
    mounted() {
        let that = this
        //todo:通过网络获取正在进行的小组
        api.getIngGroup().then(function (res) {
            let data = res.data
            that.groupIng = data.groups[0]
            // console.log(JSON.parse(res.data)["groups"])
        })
    }
}
</script>

<style scoped>
.tab-container{
    margin-top: 10px;
}
tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.group-container{
    display: flex;
    flex-direction: row;
}
</style>