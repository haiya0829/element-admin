<template>
  <div class="navbar" style='width:100%'>
    <icon></icon>

    <breadcrumb />
    
    <setup />

    <el-tooltip class="item" effect="dark" content="Global Size" placement="bottom">
      <size-select />
    </el-tooltip>   
   
    <screenfull />
   
    <search />
  </div>
</template>

<script>
import Icon from "./Icon";
import Breadcrumb from './Breadcrumb'
import Search from './Search'
import Screenfull from './Screenfull'
import SizeSelect from './SizeSelect';
import Setup from './Setup';



export default {
  components: {
    Icon,
    Breadcrumb,
    Search,
    Screenfull,
    SizeSelect,
    Setup
  },
};
</script>

<style>
.navbar {
  height:50px;
  line-height:50px;
  width:100%;
  box-shadow: 1px 2px 2px #f3f4f5;
  
}
</style>