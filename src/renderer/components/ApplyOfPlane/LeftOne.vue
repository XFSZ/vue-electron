<template>
  <div class="main">
    <title-moudle
      :blockImg="flyUrl"
      :leftTitle="leftTitle1"
      :fromNum="fromNum1"
      :toNum="toNum1"
    />
    <div
      id="myChart"
      :style="{ width: '500px', height: '368px', marginTop: '-38px' ,    marginLeft: '30px' ,marginRight: '60px'}"
    ></div>
    <title-moudle
      :blockImg="logisticsUrl"
      :leftTitle="leftTitle2"
      :fromNum="fromNum2"
      :toNum="toNum2"
    />
    <div
      id="myChart1"
      :style="{ width: '500px', height: '368px', marginTop: '-38px' ,    marginLeft: '30px',marginRight: '60px'}"
    ></div>
    <title-moudle
      :blockImg="flyUrl"
      :leftTitle="leftTitle3"
      :fromNum="fromNum3"
      :toNum="toNum3"
    />
    <div class="threecircle">
      <div class="circle-title">
        <div
          id="myChart_c1"
          :style="{ width: '70px', height: '120px', marginTop: '-20px' }"
        ></div>
        <title-moudle-bottom
          :goodNumber="googNumber1"
          :totalNumber="totalNumber1"
        />
        <div></div>
      </div>
      <div class="circle-title">
        <div
          id="myChart_c2"
          :style="{ width: '70px', height: '120px', marginTop: '-20px' }"
        ></div>
        <title-moudle-bottom
          :goodNumber="googNumber2"
          :totalNumber="totalNumber2"
        />
        <div></div>
      </div>
      <div class="circle-title">
        <div
          id="myChart_c3"
          :style="{ width: '70px', height: '120px', marginTop: '-20px' }"
        ></div>
        <title-moudle-bottom
          :goodNumber="googNumber3"
          :totalNumber="totalNumber3"
        />
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { TweenLite } from 'gsap';
import TitleMoudle from './LeftOneChild/TitleMoudle';
import TitleMoudleBottom from './LeftOneChild/TitileMoudleBottom';
import FlyImg from '../../assets/fly.png';
import LogisticsImg from '../../assets/logistics.png';
import axios from 'axios';

export default {
  name: 'hello',
  components: {
    TitleMoudle,
    TitleMoudleBottom
  },
  created() {
    axios.get('http://127.0.0.1:3000/mock/test', { // 还可以直接把参数拼接在url后边
      params: {
        title: '眼镜'
      }
    }).then(function(res) {
      res.data;
      console.log(res.data);
    }).catch(function(error) {
      console.log(error);
    });
  },
  data() {
    return {
      leftTitle1: '飞机',
      leftTitle2: '弹药',
      leftTitle3: '吊舱',
      flyUrl: FlyImg,
      logisticsUrl: LogisticsImg,
      googNumber1: 15784,
      googNumber2: 4713,
      googNumber3: 1713,
      totalNumber1: 18713,
      totalNumber2: 4971,
      totalNumber3: 1987,
      fromNum1: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      fromNum2: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      fromNum3: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      toNum1: [ { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }],
      toNum2: [ { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }],
      toNum3: [ { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }],
      echarts1: {xdata: [], ydata: []},
      echarts2: {xdata: [], ydata: []},
      echarts3: {xdata: [], ydata: []}
      // fromNum: [
      //   { name: 'totalNumberOfModels', value: 0 },
      //   { name: 'totalNumber', value: 0 },
      //   { name: 'standNumber', value: 0 }
      // ],

      // toNum: [
      //   { name: 'toTotalNumberOfModels', value: 157 },
      //   { name: 'toTotalNumber', value: 132461 },
      //   { name: 'toStandNumber', value: 111574 }
      // ]
    };
  },
  computed: {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var that = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.resize;
      myChart.setOption({
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'shadow'
        //   }
        // },

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
          interval: 20,
          splitLine: { // 网格线
            'show': false
          }
        },
        yAxis: {
          type: 'category',

          data: ['歼击机', '轰炸机', '运输机', '无人机', '特种级'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff',
              fontSize: 17,
              fontFamily: 'Zhongheijian'
            }
          },
          axisTick: { // y轴刻度线
            'show': false
          }

        },
        series: [
          {
            name: '完好率',
            barWidth: 8,
            type: 'bar',
            label: {
              show: true, // 开启显示
              position: [360, 10],
              formatter: '完好率  {c}%', // 显示百分号
              textStyle: {
                // 数值样式
                color: 'white', // 字体颜色
                fontSize: 10, // 字体大小
                fontFamily: 'opposans'
              }
            },
            showBackground: true,
            // itemStyle: {
            //   normal: {
            //     color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
            //       { offset: 0, color: '#000' },
            //       { offset: 0.3, color: '#888' },
            //       { offset: 1, color: '#ddd' }
            //     ])
            //   }},
            itemStyle: {
              normal: {
                // 每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                  // 我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                  var colorList = [

                    ['#e0a607', '#675316', '#262821'],
                    ['#d02e08', '#5b1b17', '#26131d'],

                    ['#00bbe4', '#005d7c', '#002941'],
                    ['#00bbe4', '#005d7c', '#002941'],
                    ['#00bbe4', '#005d7c', '#002941']
                  ];

                  var index = params.dataIndex;
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length;
                  }
                  var colors = new that.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    { offset: 0, color: colorList[index][0] },
                    { offset: 0.5, color: colorList[index][1] },
                    { offset: 1, color: colorList[index][2] }
                  ]);
                  return colors;
                }
                // barBorderRadius: 5 // 柱状角成椭圆形
              }
            },
            backgroundStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 1, color: '#ddd' },
                { offset: 0.3, color: '#888' },
                { offset: 0, color: '#000' }
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
          boundaryGap: [0, 0.01],
          splitLine: { // 网格线
            'show': false
          }
        },
        yAxis: {
          type: 'category',
          data: ['空空导弹', '空地导弹', '制导炸弹', '普通炸弹'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff',
              fontSize: 17,
              fontFamily: 'Zhongheijian'
            }
          },
          axisTick: { // y轴刻度线
            'show': false
          }
        },
        series: [
          {
            name: '完好率',
            barWidth: 8,
            type: 'bar',
            label: {
              show: true, // 开启显示
              position: [340, 10],
              formatter: '完好率  {c}%', // 显示百分号
              textStyle: {
                // 数值样式
                color: 'white', // 字体颜色
                fontSize: 10, // 字体大小
                fontFamily: 'opposans'
              }
            },
            itemStyle: {
              normal: {
                // 每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                  // 我这边就两个柱子，大体就两个柱子颜色渐变，所以数组只有两个值，多个颜色就多个值
                  var colorList = [

                    ['#e0a607', '#675316', '#262821'],
                    ['#d02e08', '#5b1b17', '#26131d'],

                    ['#00bbe4', '#005d7c', '#002941'],
                    ['#00bbe4', '#005d7c', '#002941'],
                    ['#00bbe4', '#005d7c', '#002941']
                  ];

                  var index = params.dataIndex;
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length;
                  }
                  var colors = new that.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    { offset: 0, color: colorList[index][0] },
                    { offset: 0.5, color: colorList[index][1] },
                    { offset: 1, color: colorList[index][2] }
                  ]);
                  return colors;
                }
                // barBorderRadius: 5 // 柱状角成椭圆形
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
        color: ['#00b3ff', '#ccc'],
        series: [
          {
            name: '军械',
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
                color: 'white',
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
                value: 75,
                name: '完好率',
                label: {
                  normal: {
                    show: true
                  }
                }
              },
              {
                value: 25,
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
        color: ['#00b3ff', '#ccc'],
        series: [
          {
            name: '电子侦察',
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
                color: 'white',
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
                value: 74,
                name: '完好率',
                label: {
                  normal: {
                    show: true
                  }
                }
              },
              {
                value: 26,
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
        color: ['#00b3ff', '#ccc'],
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
                color: 'white',
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

<style scoped>
.circle-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
}
.threecircle {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
}
.chart {
  width: "300px";
  height: "300px";
}
.p-title {
  font-size: 10px;
  /* margin-top: -8px; */
}
.main {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* height: 88%; */
  margin-top: 15px;
  /* width: 280px; */
  /* width: 90%; */
  /* border: 1px solid darkslategray;
  border-radius: 10px;
  box-shadow: rgb(11, 234, 235) 0px 15px 40px -15px inset; */
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
