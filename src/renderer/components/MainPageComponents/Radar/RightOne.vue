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
      id="myChart_rose1"
      :style="{
        width: '540px',
        height: '540px',
        marginLeft: '24px'
      }"
    ></div>
    <div class="text-table">
      <div>
        <div class="title-left">
          <img :src="logisticsUrl" class="block-img" />
          <p class="titlename">消耗趋势统计</p>
          <!-- <p class="titlename">{{ leftTitle }}</p> -->
        </div>

        <div class="hr">
          <hr />
          <!-- <el-divider></el-divider> -->
          <div class="deom_hr"></div>
          <hr />
        </div>
      </div>
      <div
          id="line_chart"
          :style="{
            width: '540px',
            height: '342px',
            marginTop: '120px'
          }"
        ></div>
      <!-- <div class="right-text-table-one">
  
      </div> -->
    
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import BlankImg from '../../../assets/block.png';
import TitleMoudle from './RightOneChild/TitleMoudle';
import FlyImg from '../../../assets/fly.png';
import LogisticsImg from '../../../assets/logistics.png';
;
export default {
  name: 'rightlabel',
  components: {
    TitleMoudle
  },
  data() {
    return {
      circleDatas: [
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
      leftTitle1: '动用使用',
      leftTitle2: '弹药',
      leftTitle3: '吊舱',
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
        { name: 'standNumber', value: 0 }
      ],
      toNum: [
        { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }
      ],
      roseData: [
        { value: 127, name: '作战备战' },
        { value: 59, name: '非战争军事行动' },
        { value: 67, name: '演练演习' },
        { value: 87, name: '激动转场' },
        { value: 111, name: '日常训练' }
      ].sort(function(a, b) {
        return a.value - b.value;
      }),
      line_chart: {
        legendData: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
        ]
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
      // 基于准备好的dom，初始化echarts实例
      let myChart6 = this.$echarts.init(
        document.getElementById('myChart_rose1')
      );
      // 绘制图表
      myChart6.setOption({

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          //   min: 80,
          //   max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '40%',
            center: ['50%', '50%'],
            data: this.roseData,
            roseType: 'radius',
            label: {
              // color: 'rgba(255, 255, 255, 1)',
              // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c} \n {per|{d}%}  ',  //label 的内容
              padding: [10, -84, 0, -84],
              formatter:
                '{a|{b}}{abg|}\n{hr|}\n  {b|' +
                '动用次数' +
                '：}{n|{c}} \n {per|{d}%}  ',
              rich: {
                // 定义不同地方的文字的字体大小和颜色
                a: {
                  color: '#ffffff',
                  fontSize: 17,
                  fontFamily: 'Zhongheijian',
                  // color: '#999',
                  lineHeight: 22,
                  align: 'left',
                  padding: [2, 4]
                },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                n: {
                  color: 'aqua',
                  fontFamily: 'opposans',
                  fontSize: 14
                },
                b: {
                  color: 'white', // 字体颜色
                  // fontSize: 10, // 字体大小
                  fontFamily: 'opposans',
                  fontSize: 14,
                  lineHeight: 20
                },
                per: {
                  color: 'white', // 字体颜色
                  // fontSize: 10, // 字体大小
                  fontFamily: 'opposans',
                  align: 'center',
                  width: '45%'
                  // color: '#eee',
                  // backgroundColor: '#334455',
                  // padding: [2, -20]
                  // borderRadius: 2
                }
              }
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              // smooth: 0.2,
              length: 20,
              length2: 80
            },
            itemStyle: {
              color: '#001234',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            hoverAnimation: false,
            // animationEasing: 'elasticOut',
            // animationDelay: function(idx) {
            //   return idx * 100;
            // },
            animationDuration: 2000
            // animationDuration: function(idx) {
            //   // 越往后的数据延迟越大
            //   return idx * 100;
            // }
          }
        ]
      });

      let myChart2 = this.$echarts.init(
        document.getElementById('line_chart')
      );
      // 绘制图表
      myChart2.setOption({
        // title: {
        //   show: true,
        //   text: '飞机质量原因时间统计',
        //   // left: 'center', // 主副标题的水平位置
        //   // top: 'center', // 主副标题的垂直位置
        //   padding: [0, 0, 0, 96], // 标题内边距
        //   textStyle: {
        //     color: '#feffff',
        //     fontFamily: 'Zhongheijian',
        //     fontSize: 18
        //   }
        // },

        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            fontFamily: 'opposans',
            fontSize: 8,
            color: '#ffffff'
          },
          data: this.line_chart.legendData
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          // top: '20%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.line_chart.xdata
        },
        yAxis: {
          splitLine: {
            // 网格线
            lineStyle: {
              // type: 'dashed',
              color: 'rgba(219,225,255,0.5)'
            }
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          type: 'value'
        },
        series: this.line_chart.seriesData
      });
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "Zhongheijian"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/Zhongheijian.ttf");
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
  height: 60px;
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
  margin-right: 148px;

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
