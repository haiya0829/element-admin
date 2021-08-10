<template>
  <div  class="size-select">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link"><i class="iconfont icon-size"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >Default</el-dropdown-item>
        <el-dropdown-item >Medium</el-dropdown-item>
        <el-dropdown-item >Small</el-dropdown-item>
        <el-dropdown-item >Mini</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
export default {
    
};
</script>

<style>
.size-select {
  float:right !important;
  overflow: hidden;
  width:28px !important;

}
</style>