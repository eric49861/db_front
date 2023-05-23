<template>
    <div class="tab-container">
        <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
            <el-tab-pane label="正在进行" name="ing">正在进行的学习小组</el-tab-pane>
            <el-tab-pane label="已结束" name="ed">已完成的学习小组</el-tab-pane>
            <el-tab-pane label="全部" name="all">加入过的全部学习小组</el-tab-pane>
            <el-tab-pane label="我创建的" name="mine">我创建的学习小组</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: "Tab",
    data() {
        return {
            activeName: "ing"
        }
    },
    methods: {
        handleClick(tab) {
            let tabName = tab.props.name
            switch (tabName) {
                case "ing":
                    //todo:通过网络获取正在进行的小组
                    break
                case "ed":
                    //todo:通过网络获取已经结束的小组
                    break
                case "all":
                    //todo:通过网络获取所有的小组
                    break
                case "mine":
                    //todo:通过网络获取我创建的小组
                    break
            }
        }
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
</style>