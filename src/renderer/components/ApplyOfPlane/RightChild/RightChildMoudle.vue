<template>
  <div class="right-child-main">
    <div class="right-child-one">
      <p class="p-style">任务编号</p>
      <p class="p-style">任务总试飞架次</p>
      <p class="p-style">当日试飞架次</p>
      <p class="p-style">剩余架次</p>
    </div>
    <div class="right-child-two">
      <p class="p-style">B-0187B</p>
      <p class="p-style">156</p>
      <p class="p-style">15</p>
      <p class="p-style">39</p>
    </div>
    <div class="right-child-three">
      <div
        id="myChart_rc4"
        :style="{ width: '72px', height: '72px', marginTop: '2px' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightchildmoudle',
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart_c3 = this.$echarts.init(
        document.getElementById('myChart_rc4')
      );
      // 绘制图表
      myChart_c3.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['blue', '#ccc'],
        series: [
          {
            name: '电子干扰',
            type: 'pie',
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['72%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              //  饼图图形上的文本标签

              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: 'center',
                color: '#ccc',
                fontSize: 10,
                fontWeight: 'bold',
                formatter: '{d}%\n{b}' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 86,
                name: '试飞进度',
                label: {
                  normal: {
                    show: true
                  }
                }
              },
              {
                value: 14,
                name: '损坏率',
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.p-style{
    font-size: 8px;
    height: 1px;
}
.right-child-main {
  display: flex;
  flex-direction: row;
  width: 360px;
  justify-content: space-evenly;
}
.right-child-one {
  display: flex;
  flex-direction: column;
}
.right-child-two {
  display: flex;
  flex-direction: column;
}
</style>
