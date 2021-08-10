<template>
  <div class="screenfull">
    <i :class="full" @click="handleFullScreen" class="screenfull-icon"></i>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      full: "iconfont icon-quanping",
      fullscreen: false
    };
  },
  methods: {
    handleFullScreen(){
    this.full = this.full === "iconfont icon-quanping" ? "iconfont icon-shouqi" : "iconfont icon-quanping";
    let element = document.documentElement;
    if (this.fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
    this.fullscreen = !this.fullscreen;
  }
  },
};
</script>

<style>
.screenfull {
    float: right;
    overflow: hidden;
    text-align: center;
    font-size: 10px;
    width:28px;
}

</style>