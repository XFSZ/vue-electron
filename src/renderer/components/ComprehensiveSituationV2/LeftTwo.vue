<template>
  <div class="mainr">
    <div class="titlemain">
      <title-moudle
        :blockImg="flyUrl"
        :leftTitle="leftTitle1"
        :fromNum="fromNum"
        :toNum="toNum"
      />
    </div>
    <div
      id="myChart_right"
      :style="{
        width: '500px',
        height: '368px',
        marginTop: '-38px',
        marginLeft: '30px',
        marginRight: '60px',
      }"
    ></div>
    <div>
      <title-moudle
        :blockImg="flyUrl"
        :leftTitle="leftTitle2"
        :fromNum="fromNum"
        :toNum="toNum"
      />
    </div>
    <!-- <div
      id="myChart_rose1"
      :style="{
        width: '580px',
        height: '468px',
       
      }"
    ></div> -->
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import BlankImg from '../../assets/block.png';
import TitleMoudle from './LeftOneChild/TitleMoudle';
import FlyImg from '../../assets/fly.png';
import LogisticsImg from '../../assets/logistics.png';
import RightChildMoudle from './RightChild/RightChildMoudle';
import TopTitle from './TopTitle/TopTitle';
export default {
  name: 'rightlabel',
  components: {
    RightChildMoudle,
    TitleMoudle,
    TopTitle
  },
  data() {
    return {
      leftTitle1: '动用使用',
      leftTitle3: '弹药',
      leftTitle2: '吊舱',
      flyUrl: FlyImg,
      logisticsUrl: LogisticsImg,
      blankUrl: BlankImg,
      googNumber1: 15784,
      googNumber2: 4713,
      googNumber3: 1713,
      totalNumber1: 18713,
      totalNumber2: 4971,
      totalNumber3: 1987,
      fromNum: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      fromNum8: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      toNum: [
        { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }
      ],
      circleData: [
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
      ],
      barchart: {
        xdata: [62.7, 30, 62.7, 17.2],
        ydata: ['空空导弹', '空地导弹', '制导炸弹', '普通炸弹']
      }
    };
  },
  computed: {
    changeTotalNumberOfModels() {
      return this.fromNum[0].value.toFixed(0);
    },
    changeTotalNumber() {
      return this.fromNum[1].value.toFixed(0);
    },
    changeStandNumber() {
      return this.fromNum[2].value.toFixed(0);
    }
  },
  mounted() {
    this.drawLine();
    this.set();
  },
  methods: {
    set() {
      for (let i = 0; i < this.toNum.length; i++) {
        this.setLite(this.fromNum[i], this.toNum[i].value);
      }
    },
    setLite(obj, val) {
      TweenLite.to(obj, 2, {
        value: val
      });
    },
    drawLine() {
      var that = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById('myChart_right')
      );
      // 绘制图表
      // myChart.resize;
      myChart.setOption({
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
          type: 'value',
          boundaryGap: [0, 0.01],
          max: 100,
          min: 0,
          maxInterval: 100,
          minInterval: 0,
          interval: 20,
          splitLine: {
            // 网格线
            show: false
          }
        },
        yAxis: {
          type: 'category',

          data: this.barchart.ydata,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff',
              fontSize: 17,
              fontFamily: 'Zhongheijian'
            }
          },
          axisTick: {
            // y轴刻度线
            show: false
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
                    [
                      'rgba(248,204,4,1)',
                      'rgba(248,204,4,0.5)',
                      'rgba(248,204,4,0.2)'
                    ],
                    [
                      'rgba(244,34,4,1)',
                      'rgba(244,34,4,0.5)',
                      'rgba(244,34,4,0.2)'
                    ],
                    [
                      'rgba(0,210,254,1)',
                      'rgba(0,210,254,0.5)',
                      'rgba(0,210,254,0.2)'
                    ],
                    [
                      'rgba(0,210,254,1)',
                      'rgba(0,210,254,0.5)',
                      'rgba(0,210,254,0.2)'
                    ],
                    [
                      'rgba(0,210,254,1)',
                      'rgba(0,210,254,0.5)',
                      'rgba(0,210,254,0.2)'
                    ]
                  ];

                  var index = params.dataIndex;
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length;
                  }
                  var colors = new that.$echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    0,
                    [
                      { offset: 0, color: colorList[index][0] },
                      { offset: 0.5, color: colorList[index][1] },
                      { offset: 1, color: colorList[index][2] }
                    ]
                  );
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
            data: this.barchart.xdata
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "Zhongheijian"; /* 这个名字可以自己定义 */
  src: url("../../assets/font/Zhongheijian.ttf");
}
.title-table-head-main {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.blank-img {
  width: 6px;
  height: 6px;

  /* margin-top: 12px; */
}
.left-img {
  margin-left: 22px;
}
.block-img {
  height: 20px;
  margin-top: 18px;
  margin-left: 15px;
  margin-bottom: 5px;
}
.title-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right-text-table-one {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  margin-top: 6px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: space-evenly;
  background-color: #061d3f;
}
.mainr {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 100%;
  /* width: 280px; */
  margin-top: 15px;
  /* margin-right: 148px; */
  /* border: 1px solid darkslategray;
  border-radius: 10px;
  box-shadow: rgb(11, 234, 235) 0px 15px 40px -15px inset; */
}
.deom_hr {
  width: 96%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}
.hr {
  /* height: 0.5px; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.title-child {
  font-family: "Zhongheijian";
  font-size: 18px;
  /* height: 6px; */
  margin-left: 4px;
  color: white;
  margin-right: 4px;
  /* margin-top: 4px; */
}
.title-child-num {
  font-family: "dinPro";
  font-size: 34px;
  color: aqua;
  padding-left: 30px;
  padding-right: 30px;
  /* flex: 1; */
  /* text-align: center; */
  /* justify-content: center; */
  /* margin-left: 20px; */
  background-color: rgb(34, 50, 75);
}
.titlename {
  font-family: "Zhongheijian";
  font-size: 18px;
  height: 8px;
  margin-left: 4px;
  color: white;
}
.text-table {
  display: flex;
  flex-direction: column;
  margin-left: 26px;
  margin-right: 24px;
}
.titlemain {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* height: 90%; */

  /* width: 100%; */
  /* border: 1px solid darkslategray;
  border-radius: 10px; */
}
.chart {
  width: "300px";
  height: "300px";
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
  font-size: 10px;
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
  font-size: 12px;
  margin-top: 2px;
}
</style>
