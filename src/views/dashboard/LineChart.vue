<template>
  <div id="line-chart" style="width: 100%; height: 350px" />
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      myChart: null,
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          data: ["expected", "actual"],
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#008acd",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#008acd",
            },
          },
        },
        series: [
          {
            name: "expected",
            data: [100, 120, 161, 134, 105, 160, 165],
            type: "line",
            smooth: true,
            color: "#FF005A",
          },
          {
            name: "actual",
            color: "#3888fa",
            data: [120, 82, 91, 154, 162, 140, 145],
            type: "line",
            smooth: true,
            areaStyle: { color: "#f6f9fe" },
          },
        ],
      },
    };
  },
  mounted() {
    this.drawEcharts();
  },
  methods: {
    drawEcharts() {
      this.myChart = echarts.init(document.getElementById("line-chart"));

      this.myChart.setOption(this.option);

      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    beforeDestroy() {
      window.removeEventListener("resize", () => {
        this.myChart.resize();
      });
    },
  },
};
</script>

<style>
</style>