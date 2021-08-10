<template>
  <div id="bar-chart" style="width: 100%; height: 300px" />
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
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: "rgba(0,0,0,.5)",
          borderWidth: 0,
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#008acd",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#008acd",
              },
            },
          },
        ],
        series: [
          {
            name: "pageA",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: [79, 52, 200, 334, 390, 330, 220],
            color: "#2ec7c9",
          },
          {
            name: "pageB",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: [80, 52, 200, 334, 390, 330, 220],
            color: "#b6a2de",
          },
          {
            name: "pageC",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: [30, 52, 200, 334, 390, 330, 220],
            color: "#5ab1ef",
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
      this.myChart = echarts.init(document.getElementById("bar-chart"));

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