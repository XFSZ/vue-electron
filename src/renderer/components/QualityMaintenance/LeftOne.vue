<template>
  <div class="mainr">
    <title-moudle
      :blockImg="flyUrl"
      :leftTitle="leftTitle1"
      :leftsmalltitle1="leftsmalltitle1"
      :leftsmalltitle2="leftsmalltitle2"
      :fromNum="fromNum1"
      :toNum="toNum1"
    />
    <div
      id="myChart"
      :style="{ width: '500px', height: '368px',  marginTop:'-34px',  marginLeft: '30px' ,marginRight: '60px'}"
    ></div>
     <top-title :imgUrl="flyUrl" :titleName="toptitlename1" />
    <div
      id="myChart1"
      :style="{ width: '500px', height: '368px',   marginTop:'-30px',   marginLeft: '30px',marginRight: '60px'}"
    ></div>
    <top-title :imgUrl="flyUrl" :titleName="toptitlename2" />
   <div
      id="myChart2"
      :style="{ width: '500px', height: '368px',   marginTop:'-30px',    marginLeft: '30px',marginRight: '60px'}"
    ></div>

  </div>
</template>

<script>
// import { TweenLite } from 'gsap';
import TitleMoudle from './LeftOneChild/TitleMoudle';
import TopTitle from './TopTitle/TopTitle';
import TitleMoudleBottom from './LeftOneChild/TitileMoudleBottom';
import FlyImg from '../../assets/fly.png';
import LogisticsImg from '../../assets/logistics.png';
import axios from 'axios';
// const baseurl = 'http://192.168.37.130:7300/mock/5f6473cac01e510020e2f086/example/';

export default {
  name: 'hello',
  components: {
    TitleMoudle,
    TitleMoudleBottom,
    TopTitle
  },
  created() {
    axios.get(this.$commonvalue.baseurl + 'dpService/getFjslsjFj', { // 还可以直接把参数拼接在url后边
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
      leftTitle1: '飞机质量',
      toptitlename1: '飞机到寿',
      toptitlename2: '飞机质量',
      leftsmalltitle1: '不完好型号总数',
      leftsmalltitle2: '数量总数',
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
        title: {
          show: true,
          text: '不完好数量分布',
          left: 'center', // 主副标题的水平位置
          // top: 'center', // 主副标题的垂直位置
          padding: 45, // 标题内边距
          textStyle: {
            color: '#feffff',
            fontFamily: 'Zhongheijian',
            fontSize: 14
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

                    ['rgba(248,204,4,1)', 'rgba(248,204,4,0.5)', 'rgba(248,204,4,0.2)'],
                    ['rgba(244,34,4,1)', 'rgba(244,34,4,0.5)', 'rgba(244,34,4,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)']
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
                { offset: 0, color: 'rgba(172,172,172,1)' },
                { offset: 0.2, color: 'rgba(172,172,172,0.5)' },
                { offset: 1, color: 'rgba(0,0,0,0.5)' }
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
        title: {
          show: true,
          text: '到寿飞机类别分布',
          left: 'center', // 主副标题的水平位置
          // top: 'center', // 主副标题的垂直位置
          padding: 44, // 标题内边距
          textStyle: {
            color: '#feffff',
            fontFamily: 'Zhongheijian',
            fontSize: 14
          }
        },
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

                    ['rgba(248,204,4,1)', 'rgba(248,204,4,0.5)', 'rgba(248,204,4,0.2)'],
                    ['rgba(244,34,4,1)', 'rgba(244,34,4,0.5)', 'rgba(244,34,4,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)']
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
                { offset: 0, color: 'rgba(172,172,172,1)' },
                { offset: 0.2, color: 'rgba(172,172,172,0.5)' },
                { offset: 1, color: 'rgba(0,0,0,0.5)' }
              ])
            },
            data: [55.1, 62.7, 17.2, 39.8]
          }
        ]
      });
      // TweenLite.fromTo('#myChart', 3, {width: '50px'}, {width: '100px'});
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
      // 绘制图表
      myChart2.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          show: true,
          text: '飞机质量问题停飞类型分布',
          left: 'center', // 主副标题的水平位置
          // top: 'center', // 主副标题的垂直位置
          padding: 44, // 标题内边距
          textStyle: {
            color: '#feffff',
            fontFamily: 'Zhongheijian',
            fontSize: 14
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

                    ['rgba(248,204,4,1)', 'rgba(248,204,4,0.5)', 'rgba(248,204,4,0.2)'],
                    ['rgba(244,34,4,1)', 'rgba(244,34,4,0.5)', 'rgba(244,34,4,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)'],
                    ['rgba(0,210,254,1)', 'rgba(0,210,254,0.5)', 'rgba(0,210,254,0.2)']
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
                { offset: 0, color: 'rgba(172,172,172,1)' },
                { offset: 0.2, color: 'rgba(172,172,172,0.5)' },
                { offset: 1, color: 'rgba(0,0,0,0.5)' }
              ])
            },
            data: [55.1, 62.7, 17.2, 39.8]
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
.mainr {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 100%;
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
