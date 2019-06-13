<template>
  <div class="statistics common-content">
    <el-row class="searchForm">
      <el-col :span="24">
        <div class="grid-content">
          <span class="label">查询条件：</span>
          <span class="label">过去</span>
          <el-input-number v-model="pastDays" controls-position="right" :min="0" :max="90"></el-input-number>
          <span class="label">天</span>
          <span class="attention">（注：0查询所有）</span>
          <el-button type="primary" @click="search">查询</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table :data="statisticDatas" border style="width: 100%;" size="medium" :row-class-name="rowClassNameHandler">
      <el-table-column label="分类名称" width="460" align="left" show-overflow-tooltip>
        <template slot-scope="scope">
          <span :style="{marginLeft: scope.row.level * 23 + 'px'}">&ensp;</span>
          <i v-if="scope.row.showChildren" :class="{'fa fa-folder-open':scope.row.showChildren, 'fa fa-file-o':!scope.row.hasChildren}" @click="onExpand(scope.row)" :style="{cursor:scope.row.hasChildren ? 'pointer' : 'normal'}"></i>
          <i v-else :class="{'fa fa-folder':scope.row.hasChildren, 'fa fa-file-o':!scope.row.hasChildren}" @click="onExpand(scope.row)" :style="{cursor:scope.row.hasChildren ? 'pointer' : 'normal'}"></i>
          <span :data-level="scope.row.level" :style="{marginLeft: 4 + 'px'}">{{ scope.row.categoryName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="categoryid" label="分类ID" width="80" align="center"></el-table-column>
      <el-table-column prop="parentcategoryid" label="父类ID" width="80" align="center"></el-table-column>
      <el-table-column prop="undeployed" label="模板（未发布）" align="left"></el-table-column>
      <el-table-column prop="deployed" label="模板（已发布）" align="left"></el-table-column>
      <el-table-column prop="edit" label="合同实例（编辑中）" align="left"></el-table-column>
      <el-table-column prop="completed" label="合同实例（完成）" align="left"></el-table-column>
    </el-table>
  </div>
</template>

<script src="./ContractStatistic.js"></script>

<style lang="less">
.statistics {
  padding: 10px;
  .hiddenRow {
    display: none;
  }
  .searchForm {
    padding: 10px;
    span.label {
      margin-right: 10px;
    }
    span.attention {
      color: #e50021;
    }
  }
}
</style>

<script>
// import { commonService } from "@/service/commonService.js";

export default {
  name: "ContractStatistic",
  data() {
    return {
      statisticDatas: [],
      pastDays: 0
    };
  },

  mounted() {
    let self = this;
    self.loadStatisticData();
  },

  methods: {
    _processLevelStatisticData(dataArray) {
      let self = this;

      let resultArray = []; // 一级栏目
      let level = 1;
      for (let i = 0; i < dataArray.length; i++) {
        let item = dataArray[i];
        // 查找一级分类
        if (item.parentcategoryid === 0) {
          item["level"] = level;
          resultArray.push(item);
          self._loadChildrenData(resultArray, dataArray, item, level + 1);
        }
      }
      return resultArray;
    },

    _loadChildrenData(resultArray, originArray, item, level) {
      let self = this;

      let deployed = 0;
      let undeployed = 0;
      let edit = 0;
      let completed = 0;

      for (let i = 0; i < originArray.length; i++) {
        let originItem = originArray[i];
        // 判断是否是item项的子项
        if (originItem.parentcategoryid === item.categoryid) {
          item["hasChildren"] = true;
          item["showChildren"] = false;

          originItem["level"] = level;
          originItem["visible"] = false; // 子项默认隐藏
          originItem["hiddenByCategory"] = false;

          resultArray.push(originItem);
          self._loadChildrenData(
            resultArray,
            originArray,
            originItem,
            level + 1
          );

          // 应该放在统计完子类数据之后
          deployed += originItem.deployed;
          undeployed += originItem.undeployed;
          edit += originItem.edit;
          completed += originItem.completed;
        }
      }
      // 计算子栏目统计合计
      item.deployed += deployed;
      item.undeployed += undeployed;
      item.edit += edit;
      item.completed += completed;
    },

    search() {
      console.log(this.pastDays);
      this.loadStatisticData();
    },

    loadStatisticData() {
      let self = this;
      let params = {
        pastDays: self.pastDays
      };
      commonService.getGeneralStatistics(params).then(function(response) {
        let result = response.data;
        let resultArray = self._processLevelStatisticData(result);
        self.statisticDatas = resultArray;
      });
    },

    rowClassNameHandler({ row, rowIndex }) {
      // console.log(row['visible'])
      let className = "pid-" + row.parentcategoryid;
      if (
        row.parentcategoryid !== 0 &&
        (row["visible"] !== true || row["hiddenByCategory"] === true)
      ) {
        className += " hiddenRow";
      }
      return className;
    },

    onExpand(row) {
      let self = this;

      let isShowChildren = !row["showChildren"];
      row["showChildren"] = isShowChildren;
      self._loadAllSubItems(row, true, isShowChildren);
    },

    _loadAllSubItems(item, isFirstLevlChildren, isShowChilren) {
      let self = this;
      let dataArray = [];
      for (let i = 0; i < self.statisticDatas.length; i++) {
        let tempItem = self.statisticDatas[i];
        if (tempItem.parentcategoryid === item.categoryid) {
          if (isFirstLevlChildren) {
            tempItem["visible"] = !tempItem["visible"];
          }
          tempItem["hiddenByCategory"] = !isShowChilren;

          dataArray.push(tempItem);
          let subItemArray = self._loadAllSubItems(
            tempItem,
            false,
            isShowChilren
          );
          dataArray = dataArray.concat(subItemArray);
        }
      }
      return dataArray;
    }
  }
};
</script>
