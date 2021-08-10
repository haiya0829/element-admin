<template>
  <el-dropdown trigger="click" class="set-up">
    <span class="el-dropdown-link">
      <img src="https://logodix.com/logo/2030523.png" alt="" class="logo">
      <i class="el-icon-caret-bottom"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item >Profile</el-dropdown-item>
      <el-dropdown-item >Dashboard</el-dropdown-item>
      <el-dropdown-item >Github</el-dropdown-item>
      <el-dropdown-item >Docs</el-dropdown-item>
      <el-dropdown-item divided>Log Out</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {

};
</script>

<style>
.set-up {
    float:right;
    overflow: hidden;
    margin-right: 30px;
}
.logo {
    width:40px;
    height: 40px;
    object-fit:cover;
}
</style>