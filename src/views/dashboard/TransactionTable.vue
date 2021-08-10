<template>
  <el-table :data="list" style="width: 100%; ">
    <el-table-column label="Order_No" min-width="200">
      <template slot-scope="scope">
        {{scope.row.orderNoFilter}}
      </template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template slot-scope="scope"> 
        ¥{{scope.row.toThousandFilter}}
      </template>
    </el-table-column>
    <el-table-column   label="Status" width="100" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.tag === 'success' ?  'danger':'success'">
          {{scope.row.tag}}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          orderNoFilter: "sasasasasasasasadsadsaw",
          toThousandFilter: "1,570",
          tag: "success",
        },
        {
          orderNoFilter: "wfdfsdfwerqweagftqr",
          toThousandFilter: "570",
          tag: "pending",
        },
        {
          orderNoFilter: "hgfwersdfhrryerrs",
          toThousandFilter: "11,684",
          tag: "pending",
        },
        {
          orderNoFilter: "sdasfghgrqwrqwssssssssssssssssssssrseq",
          toThousandFilter: "52,187",
          tag: "success",
        },
      ],
    };
  },
};
</script>

<style>

</style>