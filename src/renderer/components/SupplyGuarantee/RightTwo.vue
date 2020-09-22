<template>
  <div class="mainr">
    <top-title :imgUrl="logisticsUrl" :titleName="toptitleName0" />
    <div class="right-text-table-main-top">
      <div class="right-text-table-top-one">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-blank-img" />
          <p class="title-child">弹药不良好数</p>
          <img :src="blankUrl" class="blank-img right-blank-img" />
        </div>
        <div class="right-text-table-top-two">
          <div class="table-head-top-value">
            <span class="table-head-top-numvalue">{{
              changeTotalNumberOfModels
            }}</span>
            <span class="table-head-top-strvalue">型</span>
          </div>
          <div class="table-head-top-value">
            <span class="table-head-top-numvalue">{{
              changeTotalNumberOfModels
            }}</span>
            <span class="table-head-top-strvalue">架</span>
          </div>
        </div>
      </div>
    </div>
    <div
      id="right-two-chart_1"
      :style="{
        width: '540px',
        height: '276px',
     
      }"
    ></div>
    <div
      id="right-two-chart_2"
      :style="{
        width: '540px',
        height: '276px',
        marginBottom: '30px',
        marginTop: '30px'
      }"
    ></div>
    <top-title :imgUrl="flyUrl" :titleName="toptitleName1" />
    <div class="text-table">
      <div class="right-text-table-one">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-blank-img" />
          <p class="title-child">吊舱不完好数</p>
          <img :src="blankUrl" class="blank-img right-blank-img" />
        </div>
        <div class="table-head-top-value">
          <span class="title-child-num">{{ changeTotalNumberOfModels }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
    </div>
    <div
      id="right-two-chart_3"
      :style="{
        width: '540px',
        height: '276px',

        marginTop: '40px'
      }"
    ></div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import BG from '../../assets/pie-label.png';
import TopTitle from './TopTitle/TopTitle';
import BlankImg from '../../assets/block.png';
import TitleMoudle from './LeftOneChild/TitleMoudle';
import FlyImg from '../../assets/fly.png';
import LogisticsImg from '../../assets/logistics.png';
import RightChildMoudle from './RightChild/RightChildMoudle';
import TitleMoudleBottom from './LeftOneChild/TitileMoudleBottom';
export default {
  name: 'rightlabeltwo',
  components: {
    RightChildMoudle,
    TitleMoudle,
    TopTitle,
    TitleMoudleBottom
  },
  data() {
    return {
      toptitleName0: '弹药质量',
      leftTitle2: '弹药',
      leftTitle3: '吊舱',
      toptitleName1: '吊舱质量',

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

      toNum: [
        { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }
      ]
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
      let myChart1 = this.$echarts.init(
        document.getElementById('right-two-chart_1')
      );
      // 绘制图表
      myChart1.setOption({
        title: {
          show: true,
          text: '到寿飞机类别分布',
          left: 'center', // 主副标题的水平位置
          // top: 'center', // 主副标题的垂直位置
          padding: 24, // 标题内边距
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
        grid: {x: '120px', width: '60%', height: '70%'},
        // grid: {
        //   x: -50,
        //   y: -50,
        //   x2: 50,
        //   y2: 60,
        //   borderWidth: 10
        // },
        // grid: {
        //   left: '30px',
        //   // right: '60px'
        //   // bottom: '10%'
        //   width: '80%',
        //   height: '80%'
        //   // containLabel: true
        // },
        xAxis: {
          type: 'value',
          max: 100,
          min: 0,
          interval: 20,
          boundaryGap: [0, 0.01],
          splitLine: {
            // 网格线
            show: false
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
            // label: {
            //   show: true, // 开启显示
            //   position: [340, 10],
            //   formatter: '完好率  {c}%', // 显示百分号
            //   textStyle: {
            //     // 数值样式
            //     color: 'white', // 字体颜色
            //     fontSize: 10, // 字体大小
            //     fontFamily: 'opposans'
            //   }
            // },
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

      let myChart2 = this.$echarts.init(
        document.getElementById('right-two-chart_2')
      );
      // 绘制图表
      myChart2.setOption({
        title: {
          show: true,
          text: '调配时间统计',
          left: 'center', // 主副标题的水平位置
          // top: 'center', // 主副标题的垂直位置
          // padding: 44, // 标题内边距
          textStyle: {
            color: '#feffff',
            fontFamily: 'Zhongheijian',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // show: false,
          padding: [40, 0, 0, 0],
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {x: '120px', width: '60%', height: '70%'},
        // grid: {
        //   left: '3%',
        //   right: '4%',
        //   bottom: '3%',
        //   containLabel: true
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          splitLine: {
            // 网格线
            lineStyle: {
              type: 'dashed',
              color: 'rgba(219,225,255,0.5)'
            }
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });

      let myChart3 = this.$echarts.init(
        document.getElementById('right-two-chart_3')
      );
      // 绘制图表
      myChart3.setOption({
        title: {
          show: true,
          text: '调配时间统计',
          left: 'center', // 主副标题的水平位置
          // top: 'center', // 主副标题的垂直位置
          // padding: 44, // 标题内边距
          textStyle: {
            color: '#feffff',
            fontFamily: 'Zhongheijian',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          show: false,
          padding: [40, 0, 0, 0],
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {x: '120px', width: '60%', height: '70%'},
        // grid: {
        //   left: '3%',
        //   right: '4%',
        //   bottom: '3%',
        //   containLabel: true
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          splitLine: {
            // 网格线
            lineStyle: {
              type: 'dashed',
              color: 'rgba(219,225,255,0.5)'
            }
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
.right-one-bottom-charts {
  display: flex;
  flex-direction: column;
}
.threecircle {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
}
.right-text-table-main-top {
  margin-left: 28px;
  margin-right: 28px;
  margin-top: 6px;
}
.table-head-top-numvalue {
  font-family: "dinPro";
  color: aqua;
  flex: 1;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  margin-left: 34px;
  margin-right: 4px;
  width: 120px;
  background-color: rgb(34, 50, 75);
}
.table-head-top-strvalue {
  font-family: "opposans";
  color: whitesmoke;
  text-align: center;
  justify-content: flex-end;
  align-self: center;
  font-size: 12px;
  margin-top: 5px;
  margin-right: 20px;
}
.title-table-head-main {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.blank-img {
  width: 4px;
  height: 4px;

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
.right-text-table-top-two {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right-text-table-top-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  justify-content: space-evenly;
  background-color: #061d3f;
}
.right-text-table-one {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
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
  height: 0.5px;
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
  margin-bottom: 5px;
  /* flex: 1; */
  /* text-align: center; */
  justify-content: center;
  margin-left: 46px;
  margin-right: 10px;
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
.table-head-top-value {
  margin-top: 8px;
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
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
  font-family: "opposans";
  color: whitesmoke;
  text-align: center;
  justify-content: flex-end;
  align-self: center;
  font-size: 12px;
  margin-top: 10px;
  margin-right: 20px;
}
</style>
