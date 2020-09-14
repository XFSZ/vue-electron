<template>
  <div class="main">
    <title-moudle />
    <div
      id="myChart"
      :style="{ width: '300px', height: '250px', marginTop: '-38px' }"
    ></div>
    <title-moudle />
    <div
      id="myChart1"
      :style="{ width: '300px', height: '250px', marginTop: '-38px' }"
    ></div>
    <title-moudle />
    <div class="threecircle">
      <div class="circle-title">
        <div
          id="myChart_c1"
          :style="{ width: '120px', height: '120px', marginTop: '2px' }"
        ></div>
        <p class="p-title">完好数15784具</p>
        <p class="p-title">总数18713具</p>
        <div></div>
      </div>
      <div class="circle-title">
        <div
          id="myChart_c2"
          :style="{ width: '120px', height: '120px', marginTop: '2px' }"
        ></div>
        <p class="p-title">完好数15784具</p>
        <p class="p-title">总数18713具</p>
        <div></div>
      </div>
      <div class="circle-title">
        <div
          id="myChart_c3"
          :style="{ width: '120px', height: '120px', marginTop: '2px' }"
        ></div>
        <p class="p-title">完好数15784具</p>
        <p class="p-title">总数18713具</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { TweenLite } from 'gsap';
import TitleMoudle from './LeftOneChild/TitleMoudle';
export default {
  name: 'hello',
  components: {
    TitleMoudle
  },
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
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.resize;
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          max: 100,
          min: 0,
          maxInterval: 100,
          minInterval: 0,
          interval: 20
        },
        yAxis: {
          type: 'category',
          data: ['歼击机', '轰炸机', '运输机', '无人机', '特种级']
        },
        series: [
          {
            name: '完好率',
            barWidth: 8,
            type: 'bar',
            label: {
              show: true, // 开启显示
              position: [180, 10],
              formatter: '完好率:{c}%', // 显示百分号
              textStyle: {
                // 数值样式
                color: 'black', // 字体颜色
                fontSize: 10 // 字体大小
              }
            },
            showBackground: true,
            backgroundStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: '#000' },
                { offset: 0.3, color: '#888' },
                { offset: 1, color: '#ddd' }
              ])
              // color: 'rgba(0, 220, 220, 0.8)'
              // shadowOffsetX: 50,
              // shadowOffsetY: 20
            },
            data: [62.7, 30, 62.7, 17.2, 39.8]
          }
        ]
      });
      // TweenLite.fromTo('#myChart', 3, {width: '50px'}, {width: '100px'});
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
      // 绘制图表
      myChart1.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          max: 100,
          min: 0,
          interval: 20,
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['空空导弹', '空地导弹', '知道炸弹', '普通炸弹']
        },
        series: [
          {
            name: '完好率',
            barWidth: 8,
            type: 'bar',
            label: {
              show: true, // 开启显示
              position: [180, 10],
              formatter: '完好率:{c}%', // 显示百分号
              textStyle: {
                // 数值样式
                color: 'black', // 字体颜色
                fontSize: 10 // 字体大小
              }
            },
            showBackground: true,
            backgroundStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: '#000' },
                { offset: 0.3, color: '#888' },
                { offset: 1, color: '#ddd' }
              ])
            },
            data: [55.1, 62.7, 17.2, 39.8]
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart_c1 = this.$echarts.init(
        document.getElementById('myChart_c1')
      );
      // 绘制图表
      myChart_c1.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['red', '#ccc'],
        series: [
          {
            name: 'XXX站点超标率',
            type: 'pie',
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              //  饼图图形上的文本标签

              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: 'center',
                color: 'red',
                fontSize: 18,
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
                value: 40,
                name: '超标',
                label: {
                  normal: {
                    show: true
                  }
                }
              },
              {
                value: 60,
                name: '正常',
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

      // 基于准备好的dom，初始化echarts实例
      let myChart_c2 = this.$echarts.init(
        document.getElementById('myChart_c2')
      );
      // 绘制图表
      myChart_c2.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['red', '#ccc'],
        series: [
          {
            name: 'XXX站点超标率',
            type: 'pie',
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              //  饼图图形上的文本标签

              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: 'center',
                color: 'red',
                fontSize: 18,
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
                value: 40,
                name: '超标',
                label: {
                  normal: {
                    show: true
                  }
                }
              },
              {
                value: 60,
                name: '正常',
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

      // 基于准备好的dom，初始化echarts实例
      let myChart_c3 = this.$echarts.init(
        document.getElementById('myChart_c3')
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
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              //  饼图图形上的文本标签

              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: 'center',
                color: '#ccc',
                fontSize: 18,
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
                name: '完好率',
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
<style>
.main .el-divider {
  background-color: #dcdfe6;
  position: relative;
}
.main .el-divider--horizontal {
  height: 1px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.hr {
  height: 1px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
<style scoped>
.circle-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.threecircle {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
.chart {
  width: "300px";
  height: "300px";
}
.p-title {
  font-size: 10px;
  margin-top: -8px;
}
.main {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 90%;
  width: 90%;
  border: 1px solid darkslategray;
  border-radius: 10px;
  box-shadow: rgb(11, 234, 235) 0px 15px 40px -15px inset;
}
.table-head {
  display: flex;
  flex-direction: row;
}
.table-head-context {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.table-head-title {
  flex: 1;
  text-align: center;
}
.table-head-value {
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
.table-head-numvalue {
  flex: 1;
  text-align: center;
  justify-content: center;
  margin-left: 20px;
}
.table-head-strvalue {
  text-align: center;
  justify-content: flex-end;
}
</style>
