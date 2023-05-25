<template>
    <div class="card-container" >
        <el-card class="card" shadow="always">
            <div class="card-top">
                <div class="background" :style="getBg"></div>
            </div>
            <div class="card-middle">
                <h2>{{ getGroup.name }}</h2>
                <p>开始时间: {{ getGroup.startTime }}</p>
                <p>结束时间: {{ getGroup.endTime }}</p>
            </div>
            <div class="card-bottom">
                <el-tooltip content="详细信息">
                    <el-button @click="moreInfo">
                        <el-icon >
                            <More />
                        </el-icon>
                    </el-button>
                </el-tooltip>
                <el-tooltip content="退出小组">
                    <el-button @click="quitGroup">
                        <el-icon >
                            <Delete />
                        </el-icon>
                    </el-button>
                </el-tooltip>
                <el-tooltip content="进入">
                    <el-button @click="enterGroup">
                        <el-icon>
                            <Aim />
                        </el-icon>
                    </el-button>
                </el-tooltip>
            </div>
        </el-card>
    </div>
    <el-drawer v-model="drawer" :title="getGroup.name" direction="btt">
        <span>Hi there!</span>
    </el-drawer>
</template>

<script>
import { ElMessageBox, ElMessage } from 'element-plus'
import {ref} from 'vue'
export default {
    name: "StuudyGroup",
    props: {
        group: Object
    },
    data() {
        return {
            drawer: ref(false)
        }
    },
    methods: {
        moreInfo() {
            console.log("显示抽屉")
            this.drawer = true
        },
        quitGroup() {
            ElMessageBox.alert('确定退出该学习小组吗?', '确认操作', {
                confirmButtonText: '确认',
                callback: (action) => {
                    if (action == "confirm") {
                        //发送网络请求，用户退出该小组，并刷新用户的加入的小组的情况
                    }
                    ElMessage({
                        type: 'info',
                        message: `action: ${action}`,
                    })
                },
            })
        },
        enterGroup() {
            
        },
    },
    computed: {
        getBg() {
            return `backgroud-img:url(${this.group.imgLink})`
        },
        getGroup() {
            return this.group
        }
    }
}
</script>

<style scoped>

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
    display: flex;
    flex-direction: column;
}

.card-top {
    flex: 1;
    width: 150px;
    height: 150px;
}

.card-middle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  margin: 5px 0;
}

.card-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.card-top {
  flex: 1;
  position: relative;
}

.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(8px);
  opacity: 0.8;
}

.card-bottom el-button {
  margin: 0 10px;
}
</style>