<template>
  <i id='icon' :class="foldOpen" @click="isCollapse"></i>
</template>

<script>
export default {
  data() {
    return {
      foldOpen: "el-icon-s-fold",
    };
  },
  methods: {
    isCollapse() {
      this.foldOpen = this.foldOpen === "el-icon-s-fold" ? "el-icon-s-unfold" : "el-icon-s-fold";
    },
  },
}
</script>

<style>
  #icon {
    color:#404040;
    font-size:20px;
    padding:0 15px;
  }
</style>