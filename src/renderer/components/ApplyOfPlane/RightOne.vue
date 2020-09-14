<template>
  <div class="main">
    <p>ONE</p>
    <div id="myChart6" :style="{ width: '300px', height: '300px' }"></div>
    <div id="myChart7" :style="{ width: '300px', height: '300px' }"></div>
    <div id="myChart8" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart6 = this.$echarts.init(document.getElementById('myChart6'));
      // 绘制图表
      myChart6.setOption({
        // title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart7 = this.$echarts.init(document.getElementById('myChart7'));
      // 绘制图表
      myChart7.setOption({
        // title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart8 = this.$echarts.init(document.getElementById('myChart8'));
      // 绘制图表
      myChart8.setOption({
        // title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
<style  scoped>
.main {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
</style>
