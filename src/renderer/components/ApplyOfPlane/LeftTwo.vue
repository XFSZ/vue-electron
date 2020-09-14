<template>
  <div class="main">
    <p>TWO</p>
    <div id="myChart3" :style="{ width: '300px', height: '300px' }"></div>
    <div id="myChart4" :style="{ width: '300px', height: '300px' }"></div>
    <div id="myChart5" :style="{ width: '300px', height: '300px' }"></div>
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
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
      // 绘制图表
      myChart3.setOption({
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
      let myChart4 = this.$echarts.init(document.getElementById('myChart4'));
      // 绘制图表
      myChart4.setOption({
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
      let myChart5 = this.$echarts.init(document.getElementById('myChart5'));
      // 绘制图表
      myChart5.setOption({
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
