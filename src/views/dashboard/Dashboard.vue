<template>
  <div class="dashboard">
    <github-corner />
    <panel-group />
    <el-row  style="background: #fff;padding: 16px 16px 0;margin-bottom: 32px; margin-top: 32px;">
      <line-chart />
    </el-row>
    <el-row :gutter="32" >
      <el-col :span='8'>
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :span='8' >
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :span='8' >
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter='8'>
      <el-col :span='12'>
        <transaction-table />
      </el-col>
      <el-col :span='6'>
         <todo-list />
      </el-col>
      <el-col :span='6'>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import GithubCorner from "../../components/githubCorner";
import PanelGroup from "./PanelGroup";
import LineChart from "./LineChart";
import RaddarChart from "./RaddarChart";
import PieChart from './PieChart'
import BarChart from './BarChart';
import TransactionTable from './TransactionTable';
import TodoList from './todolist'

export default {
  components: {
    PanelGroup,
    GithubCorner,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
  },
};
</script>

<style>
.dashboard {
  background-color: #f0f2f5;
  padding: 32px;
  position: relative;
}
.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}
</style> 