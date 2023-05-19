<template>
    <el-descriptions
        class="margin-top"
        title=""
        :column="3"
        :size="size"
        border>
        <template #extra>
          <el-button type="primary">进入小组</el-button>
        </template>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <user />
              </el-icon>
              小组名称
            </div>
          </template>
          {{title}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <iphone />
              </el-icon>
              开始时间
            </div>
          </template>
          {{startTime}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <location />
              </el-icon>
              结束时间
            </div>
          </template>
          {{endTime}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <tickets />
              </el-icon>
              Remarks
            </div>
          </template>
          <el-tag size="small">{{type}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <office-building />
              </el-icon>
              学习目标
            </div>
          </template>
          {{goal}}
        </el-descriptions-item>
      </el-descriptions>
</template>

<script>

export default {
    name: "StudyGroup",
    props: {
        title: String,
        topic: String,
        startTime: String,
        endTime: String,
        type: String,
        goal:String
    }
}
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 0px;
}
</style>