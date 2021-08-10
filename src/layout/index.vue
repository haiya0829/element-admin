<template>
  <div class="wrapper">
    <sidebar>
      <div class="logo" @click="backPage">
        <svg-icon icon-class='vue' />
        <span>Vue Element Admin</span>
      </div>
    </sidebar>
    <div class="header">
      <navbar :class="{ Sticky: isSticky }" />
      <app-main />
      <right-panel @switchClick="navbarSticky" />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import AppMain from "./components/AppMain";
import RightPanel from "../components/RightPanel";

export default {
  components: {
    Sidebar,
    Navbar,
    AppMain,
    RightPanel,
  },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    navbarSticky() {
      this.isSticky = !this.isSticky;
    },
    backPage() {
      this.$router.push('/dashboard')
    }
  },
};
</script>

<style lang='scss' scoped>
.wrapper {
  display: flex;
  min-width: 1200px;
  box-sizing: border-box;
}
.header {
  width: 100%;
  height:100%;
}
.Sticky {
  position: sticky;
  z-index: 1000;
  top: 0;
  background: #fff;
}
.logo {
  width:100%;
  height:50px;
  padding:0;
  color:#fff;
  background: #2b2f3a;
  display: flex;
  justify-content: center;
  align-items: center;
  .svg-icon {
    font-size:32px;
    background: #2b2f3a;
    margin-right: 10px;

  }
}
</style>