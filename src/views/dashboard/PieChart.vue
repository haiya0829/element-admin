<template>
  <div id="pie-chart" style="width: 100%; height: 300px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChart: null,
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          backgroundColor: "rgba(0,0,0,.5)",
          borderWidth: 0,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          left: "center",
          bottom: "10",
          data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
        },
        series: [
          {
            name: "WEEKLY WRITE ARTICLES",
            color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80"],
            type: "pie",
            radius: [15, 95],
            center: ["50%", "38%"],
            roseType: "radius",
            data: [
              { value: 320, name: "Industries" },
              { value: 240, name: "Technology" },
              { value: 149, name: "Forex" },
              { value: 100, name: "Gold" },
              { value: 59, name: "Forecasts" },
            ],

            animationDuration: 2600,
          },
        ],
      }
    }
  },
  mounted() {
    this.drawEcharts();
  },
  methods: {
    drawEcharts() {
      this.myChart = echarts.init(document.getElementById("pie-chart"));

      this.myChart.setOption(this.option);

      window.addEventListener("resize", () => {this.myChart.resize()});
    },
    beforeDestroy() {
      window.removeEventListener("resize", () => {this.myChart.resize()});
    },
  },
};
</script>

<style>
</style>