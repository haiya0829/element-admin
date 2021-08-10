<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-icon icon-people">
          <svg-icon icon-class="visits" />
        </div>
        <div class="card-description">
          <div class="card-text">New Visitis</div>
          <div class="card-num">102,400</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-icon icon-message">
          <svg-icon icon-class="message" />
        </div>
        <div class="card-description">
          <div class="card-text">Messages</div>
          <div class="card-num">81,212</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-icon icon-money">
          <svg-icon icon-class="money" />
        </div>
        <div class="card-description">
          <div class="card-text">Purchases</div>
          <div class="card-num">14,575</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-icon icon-shopping">
          <svg-icon icon-class="shoppingCart" />
        </div>
        <div class="card-description">
          <div class="card-text">Shoppings</div>
          <div class="card-num">13,600</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.panel-group{
  padding-top: 18px;
}
.card-panel {
  height: 108px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
}
.card-panel:hover {
  .card-icon {
    color: #fff;
  }
  .icon-people {
    background: #40c9c6;
  }
  .icon-message {
    background: #36a3f7;
  }

  .icon-money {
    background: #f4516c;
  }

  .icon-shopping {
    background: #34bfa3;
  }

}
.icon-people {
  color: #40c9c6;
}
  .icon-message {
    color: #36a3f7;
  }
  .icon-money {
    color: #f4516c;
  }

  .icon-shopping {
    color: #34bfa3;
  }
.card-icon {
  margin: 14px 0 0 14px;
  padding: 16px;
  float: left;
  border-radius: 6px;
  transition: all 0.38s ease-out;
}
.card-description {
  width: 100px;
  float: right;
  font-weight: bold;
  margin-top: 26px;
}
.card-text {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}
.card-num {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
}
.svg-icon {
  font-size: 48px;
}
</style>