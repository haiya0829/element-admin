<template>
  <div class="rightPanel" :style='isShow' @mousewheel.prevent >
    <div class="popContainer"  v-show="show" />
    <div  class="panel-btn" :style="{ background: color1 }" @click="isSetting">
      <svg-icon :icon-class="panel" @click="drawer = true"  />
    </div>
    <div class="panel-items" ref='msk'>
      <h4>Page style setting</h4>
      <div class="block">
        <span class="demonstration">Theme Color</span>
        <el-color-picker v-model="color1" class="color-picker"  :predefine="predefineColors">
        </el-color-picker>
      </div>
      <div class="block">
        <span>Open Tags-View</span>
        <div>
          <el-switch v-model="value1" :active-color="color1">
          </el-switch>
        </div>
      </div>
      <div class="block">
        <span>Fixed Header</span>
        <div @click='btnClick'>
          <el-switch v-model="value2" :active-color="color1">
          </el-switch>
        </div>
      </div>
      <div class="block">
        <span>Sidebar Logo</span>
        <div @click="btn1Click">
          <el-switch v-model="value3" :active-color="color1">
          </el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      panel: "setting",
      color1: "#409EFF",
      value1: true,
      value2: false,
      value3: false,
      isShow:'right:-260px',
      predefineColors: [
        '#409EFF',
        '#1890FF',
        '#304156',
        '#212121',
        '#11A983',
        '#13C2C2',
        '#6959CD',
        '#F5222D'
      ],
      show:false
    };
  },
  methods: {
    isSetting() {
      this.panel = this.panel === "setting" ? "close" : "setting";
      this.isShow = this.isShow === 'right:-260px' ? 'right:0' : 'right:-260px'
      this.show = !this.show
  },
    btnClick() {
      this.$emit('switchClick')
    },
    btn1Click() {
      this.$emit('logoClick')
    },
  }
};
</script>

<style lang='scss'>
.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 1111;
  padding: 24px;
  box-sizing: border-box;
  font-size: 14px;
}
.panel-btn {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 30vh;
  left: -48px;
  z-index: 1111;
  cursor: pointer;
  border-radius: 6px 0 0 6px;
  .svg-icon {
    color: #fff;
    font-size: 24px;
    position: relative;
    top: 12px;
    left: 12px;
  }
}
.block {
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-color-picker {
    height: 24px;
  }
}
.el-color-picker__trigger {
  width: 26px !important;
  height: 26px !important;
  padding: 2px !important;
}

.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 260px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
</style>