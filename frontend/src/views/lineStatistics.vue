<template>
  <div>
    <div style="display: flex;">
      <el-select size='small' v-model="selectedPro" placeholder="请选择">
        <el-option
          v-for="item in projects"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-input style="width: 180px;" size='small' placeholder="请输入行数"></el-input>
      <el-button size='small'>搜索</el-button>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          v-for="(item, index) in tableHeader"
          :key = index
          prop="date"
          :label="item"
          >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        'blueHorse',
        'sh-crm',
        'zmc-crm',
      ],
      selectedPro: '',
      tableHeader: [
        '项目',
        '文件目录',
        '行数'
      ]
    };
  },
  components: {

  },
};
</script>

<style scoped lang="scss">

</style>
