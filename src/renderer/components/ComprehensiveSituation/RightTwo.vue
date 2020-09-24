<template>
  <div class="mainr">
    <top-title :imgUrl="logisticsUrl" :titleName="toptitleName0" />

    <div
      id="right_two_chart_1"
      :style="{
        width: '540px',
        height: '276px',
         marginTop:'20px',
         marginBottom:'20px'
      }"
    ></div>
    <div class="hr">
      <hr />
      <div class="deom_hr"></div>
      <hr />
    </div>
    <div
      id="right_two_chart_2"
      :style="{
        width: '540px',
        height: '276px',
         marginTop:'20px',
         marginBottom:'20px'
      }"
    ></div>
        <div class="hr">
      <hr />
      <div class="deom_hr"></div>
      <hr />
    </div>
    <div
      id="right_two_chart_3"
      :style="{
        width: '540px',
        height: '276px',
      marginTop:'20px',
      marginBottom:'20px'
      }"
    ></div>
        <div class="hr">
      <hr />
      <div class="deom_hr"></div>
      <hr />
    </div>
    <div
      id="right_two_chart_4"
      :style="{
        width: '540px',
        height: '276px',
         marginTop:'20px'

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
      toptitleName0: '调配供应',
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
      ],
      lineData1: {
        xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        legendData: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        seriesData: [
          {
            name: '邮件营销',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]},
      lineData2: {
        xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        legendData: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        seriesData: [
          {
            name: '邮件营销',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]},
      lineData3: {
        xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        legendData: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        seriesData: [
          {
            name: '邮件营销',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]},
      lineData4: {
        xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        legendData: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        seriesData: [
          {
            name: '邮件营销',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            symbol: 'none',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]}

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
      let right_two_chart_1 = this.$echarts.init(
        document.getElementById('right_two_chart_1')
      );
      // 绘制图表
      right_two_chart_1.setOption({
        title: {
          show: true,
          text: '弹药调配时间统计',
          left: 'center', // 主副标题的水平位置
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
          right: '10%',
          itemWidth: 20,
          itemHeight: 8,
          textStyle: {
            fontFamily: 'opposans',
            fontSize: 8,
            color: '#ffffff'
          },
          padding: [40, 0, 0, 0],
          data: this.lineData1.legendData
        },
        grid: {x: '120px', width: '60%', height: '70%'},

        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            // 网格线
            show: false
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },

          data: this.lineData1.xdata
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
          splitLine: {
            // 网格线
            show: false
          },
          axisTick: {
            // y轴刻度线
            show: false
          }
        },
        series: this.lineData1.seriesData
      });

      let right_two_chart_2 = this.$echarts.init(
        document.getElementById('right_two_chart_2')
      );
      // 绘制图表
      right_two_chart_2.setOption({
        title: {
          show: true,
          text: '吊舱调配时间统计',
          left: 'center', // 主副标题的水平位置
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
          right: '10%',
          itemWidth: 20,
          itemHeight: 8,
          textStyle: {
            fontFamily: 'opposans',
            fontSize: 8,
            color: '#ffffff'
          },
          padding: [40, 0, 0, 0],
          data: this.lineData2.legendData
        },
        grid: {x: '120px', width: '60%', height: '70%'},

        xAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
          splitLine: {
            // 网格线
            show: false
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          type: 'category',
          boundaryGap: false,
          data: this.lineData2.xdata
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
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
        series: this.lineData2.seriesData
      });

      let right_two_chart_3 = this.$echarts.init(
        document.getElementById('right_two_chart_3')
      );
      // 绘制图表
      right_two_chart_3.setOption({
        title: {
          show: true,
          text: '发动机调配时间统计',
          left: 'center', // 主副标题的水平位置
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
          right: '10%',
          itemWidth: 20,
          itemHeight: 8,
          textStyle: {
            fontFamily: 'opposans',
            fontSize: 8,
            color: '#ffffff'
          },
          padding: [40, 0, 0, 0],
          data: this.lineData3.legendData
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
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
          splitLine: {
            // 网格线
            show: false
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          type: 'category',
          boundaryGap: false,
          data: this.lineData3.xdata
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
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
        series: this.lineData3.seriesData
      });

      let right_two_chart_4 = this.$echarts.init(
        document.getElementById('right_two_chart_4')
      );
      // 绘制图表
      right_two_chart_4.setOption({
        title: {
          show: true,
          text: '航材调配时间统计',
          left: 'center', // 主副标题的水平位置
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
          right: '10%',
          itemWidth: 20,
          itemHeight: 8,
          textStyle: {
            fontFamily: 'opposans',
            fontSize: 8,
            color: '#ffffff'
          },
          padding: [40, 0, 0, 0],
          data: this.lineData4.legendData
        },
        grid: {x: '120px', width: '60%', height: '70%'},

        xAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
          splitLine: {
            // 网格线
            show: false
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          type: 'category',
          boundaryGap: false,
          data: this.lineData4.xdata
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              fontFamily: 'opposans',
              color: 'rgba(170,170,170,0.5)'
            }
          },
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
        series: this.lineData4.seriesData
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
  padding-left: 20px;
  padding-right: 20px;
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
