<template>
  <div id="raddar-chart" style="width: 100%; height: 300px" />
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
            type: "shadow",
          },
        },
        legend: {
          left: "center",
          bottom: "10",
          data: ["Allocated Budget", "Expected Spending", "Actual Spending"],
        },
        radar: [
          {
            indicator: [
              { name: "Sales", max: 10000 },
              { name: "Administration", max: 20000 },
              { name: "Information Technology", max: 20000 },
              { name: "Customer Support", max: 20000 },
              { name: "Development", max: 20000 },
              { name: "Marketing", max: 20000 },
            ],
            radius: "66%",
            center: ["50%", "42%"],
            splitNumber: 8,
            splitArea: {
              areaStyle: {
                color: "rgba(127,95,132,.3)",
                opacity: 1,
                shadowBlur: 45,
                shadowColor: "rgba(0,0,0,.5)",
                shadowOffsetX: 0,
                shadowOffsetY: 15,
              },
            },
            splitLine: {
              //配置雷达图的每一圈的网格线颜色
              lineStyle: {
                color: "rgba(255,255,255,0.2)",
              },
            },
          },
        ],
        series: [
          {
            color: ["#32dadd", "#b6a2de", "#5ab1ef"],
            symbolSize: 0,
            type: "radar",
            areaStyle: {
              shadowBlur: 13,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opcaity: 1,
            },
            data: [
              {
                value: [5000, 7000, 12000, 11000, 15000, 14000],
                name: "Allocated Budget",
              },
              {
                value: [4000, 9000, 15000, 15000, 13000, 11000],
                name: "Expected Spending",
              },
              {
                value: [5500, 11000, 12000, 15000, 12000, 12000],
                name: "Actual Spending",
              },
            ],

            animationDuration: 3000,
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
      this.myChart = echarts.init(document.getElementById("raddar-chart"));

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