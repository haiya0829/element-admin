<template>
  <div class="hearder-search" @click="show">
    <i class="el-icon-search" class-name="search-icon"></i>
    <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="Search"
      :remote-method="remoteMethod"
      :loading="loading"
      class="search-select"
      v-show="isShow"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      options: [],
      value: [],
      loading: false,
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
};
</script>

<style scoped>
.hearder-search {
  float: right;
  overflow: hidden;
  margin-right: 12px;
}

::v-deep .el-input__inner {
  border-radius: 0;
  border: 0;
  padding-left: 0;
  padding-right: 0 !important;
  box-shadow: none !important;
  border-bottom: 1px solid #d9d9d9;
  vertical-align: middle;
}
::v-deep .el-select__input {
  margin-left: 0;
}
</style>