<template>
  <div class="github-corner">
    <a href="https://github.com" >
      <svg-icon class="icon-git"  icon-class="github" />
    </a>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.github-corner {
    border-style:solid;
    border-width:40px 40px 40px 40px;
    border-color:#40c9c6  #40c9c6 transparent transparent;
    width:0;
    height:0;
    position:absolute;
    top:0;
    right:0;
    z-index:11;
}
.icon-git {
    font-size:38px;
    position: absolute;
    top:-26px;
    right:-32px;
    color: #fff;

}
</style>