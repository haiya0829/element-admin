<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bfcbc0"
    active-text-color="#409eff"
    router
  >
    <slot></slot>
    <sidebarItme></sidebarItme>
  </el-menu>
</template>

<script>
import SidebarItme from "./SidebarItme";
export default {
  components: {
    SidebarItme,
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width:210px;
  min-width:210px;
  overflow: hidden;
}
.iconfont {
  font-size: 12px;
  margin-right: 16px;
}
</style>