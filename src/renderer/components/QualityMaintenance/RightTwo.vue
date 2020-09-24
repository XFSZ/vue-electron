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
        marginTop: '-30px',
      }"
    ></div>
    <div
      id="right-two-chart_2"
      :style="{
        width: '540px',
        height: '276px',
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
        <!-- <p class="title-child-num">{{ changeTotalNumberOfModels }}</p> -->
      </div>
    </div>
    <div class="right-one-bottom-charts">
      <p class="circle-title-str">吊舱不完好情况分布</p>
      <div class="threecircle">
         
        <div class="circle-title">
         
          <div
            id="right-two_c1"
            :style="{ width: '90px', height: '120px', marginTop: '-20px' }"
          ></div>
          <title-moudle-bottom
            :goodNumber="googNumber1"
            :totalNumber="totalNumber1"
          />
        </div>
        <div class="circle-title">
          <div
            id="right-two_c2"
            :style="{ width: '90px', height: '120px', marginTop: '-20px' }"
          ></div>
          <title-moudle-bottom
            :goodNumber="googNumber2"
            :totalNumber="totalNumber2"
          />
        </div>
        <div class="circle-title">
          <div
            id="right-two_c3"
            :style="{ width: '90px', height: '120px', marginTop: '-20px' }"
          ></div>
          <title-moudle-bottom
            :goodNumber="googNumber3"
            :totalNumber="totalNumber3"
          />
        </div>
      </div>
      <p class="circle-title-str">不完好原因分布</p>
      <div
        id="right-two_tc4"
        :style="{
          width: '440px',
          height: '180px',
          marginTop: '20px',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import BG from '../../assets/chart-mid.png';

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
      ],
      legendDatas: [{name: '一等值班', value: '100'}, {name: '二等值班', value: '100'}, {name: '三等值班', value: '100'}],
      circleData1: [
        { value: 40, name: '' },
        { value: 36, name: '' },
        { value: 24, name: '' }
      ],
      circleData2: [
        { value: 40, name: '一等值班' },
        { value: 36, name: '二等值班' },
        { value: 24, name: '三等值班' }
      ],
      right_two_chart_1_Data: {
        legendData: ['直接访问', '邮件营销', '联盟广告'],
        ydata: ['空空导弹', '空地导弹', '制导炸弹', '普通炸弹'],
        seriesData: [
          {
            barWidth: 8,
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: 'rgba(0,210,254,1)'
              },
              {
                offset: 0.5,
                color: 'rgba(0,210,254,0.5)'
              },
              {
                offset: 1,
                color: 'rgba(0,210,254,0)'
              }

              ])
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            barWidth: 8,
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            // label: {
            //   show: true,
            //   position: 'insideRight'
            // },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: 'rgba(244,34,4,1)'
              },
              {
                offset: 0.7,
                color: 'rgba(244,34,4,0.5)'
              },
              {
                offset: 1,
                color: 'rgba(244,34,4,0)'
              }

              ])
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            barWidth: 8,
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            // label: {
            //   show: true,
            //   position: 'insideRight'
            // },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: 'rgba(248,204,4,1)'
              },
              {
                offset: 0.7,
                color: 'rgba(248,204,4,0.5)'
              },
              {
                offset: 1,
                color: 'rgba(248,204,4,0)'
              }

              ])
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      right_two_chart_2_Data: {
        legendData: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        seriesData: [
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
      },
      right_two_c1_Data: [
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
      ],
      right_two_c2_Data: [
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
          value: 16,
          name: '正常',
          label: {
            normal: {
              show: false
            }
          }
        }
      ],
      right_two_c3_Data: [
        {
          value: 84,
          name: '完好率',
          label: {
            normal: {
              show: true
            }
          }
        },
        {
          value: 16,
          name: '正常',
          label: {
            normal: {
              show: false
            }
          }
        }
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
      // var that = this;
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
          padding: 34, // 标题内边距
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

        legend: {
          right: '10%',
          itemWidth: 20,
          itemHeight: 8,
          textStyle: {
            fontFamily: 'opposans',
            fontSize: 8,
            color: '#ffffff'
          },
          padding: [54, 0, 0, 0],
          data: this.right_two_chart_1_Data.legendData
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
          // max: 100,
          // min: 0,
          // interval: 20,
          // boundaryGap: [0, 0.01],
          splitLine: {
            // 网格线
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: this.right_two_chart_1_Data.ydata,
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

        series: this.right_two_chart_1_Data.seriesData

      });

      let myChart2 = this.$echarts.init(
        document.getElementById('right-two-chart_2')
      );
      // 绘制图表
      myChart2.setOption({
        title: {
          show: true,
          text: '不良好原因时间统计',
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
          data: this.right_two_chart_2_Data.legendData
        },
        grid: {x: '116px', width: '60%', height: '70%'},

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
          data: this.right_two_chart_2_Data.xdata
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
        series: this.right_two_chart_2_Data.seriesData
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart_c1 = this.$echarts.init(
        document.getElementById('right-two_c1')
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
            data: this.right_two_c1_Data
          }
        ]
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart_c2 = this.$echarts.init(
        document.getElementById('right-two_c2')
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
            data: this.right_two_c2_Data
          }
        ]
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart_c3 = this.$echarts.init(
        document.getElementById('right-two_c3')
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
            data: this.right_two_c3_Data
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart_c4 = this.$echarts.init(
        document.getElementById('right-two_tc4')
      );
      let datas = ['一等值班', '二等值班', '三等值班'];
      let legendDatas = this.legendDatas;
      // 绘制图表
      myChart_c4.setOption({
        tooltip: {
          // 提示框，可以在全局也可以在
          trigger: 'item', // 提示框的样式
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          color: '#000', // 提示框的背景色
          textStyle: {
            // 提示的字体样式
            color: 'black'
          }
        },
        legend: {
          // 图例
          orient: 'vertical', // 图例的布局，vertical竖直    horizontal为水平
          // x: 'right', // 图例显示在右边
          right: 8,
          // top: 8,
          bottom: 4,

          formatter: function(name) {
            let seriesObj;
            for (let i = 0; i < legendDatas.length; i++) {
              if (legendDatas[i].name === name) {
                seriesObj = legendDatas[i].value;
                break;
              }
            }
            var arr = [
              '{a|' + name + '}' + '\n {b|' + '数量   ' + seriesObj + '具' + '}'
            ];
            return arr;
          },

          textStyle: {
            rich: {
              a: {
                color: 'white',
                lineHeight: 20,
                height: 18,
                fontSize: 14, // 文字大小
                fontFamily: 'Zhongheijian'
              },
              n: {
                color: 'white',
                lineHeight: 20,
                height: 18,
                fontSize: 14, // 文字大小
                fontFamily: 'opposans'
              },
              b: {
                height: 12,
                color: '#878b91', // 文字颜色
                lineHeight: 20,
                fontSize: 12, // 文字大小
                fontFamily: 'dinPro'
              }
            }
          }
        },
        graphic: {
          elements: [
            {
              // 将图片定位到最下方的中间：
              type: 'image',
              // left: 'center', // 水平定位到中间
              left: '28.5%',
              top: '28%',
              // bottom: '10%', // 定位到距离下边界 10% 处
              // position: [110, 0],
              style: {
                image: BG,
                width: 60,
                height: 60
              }
            }
          ]
        },
        series: [

          {
            name: '',
            type: 'pie', // 环形图的type和饼图相同
            // radius: ['50%', '70%'], // 饼图的半径，第一个为内半径，第二个为外半径
            center: ['36%', '44%'], // 饼图的圆心坐标
            radius: ['56%', '74%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            color: ['rgba(125,125,125,0.3)', 'rgba(0,207,255,0.3)', 'rgba(255,255,255,0.3)'],

            label: {
              show: false // 开启显示

            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: this.circleData1
          },
          {
            name: '值班兵力',
            type: 'pie', // 环形图的type和饼图相同
            // radius: ['50%', '70%'], // 饼图的半径，第一个为内半径，第二个为外半径
            center: ['36%', '44%'], // 饼图的圆心坐标
            radius: ['74%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            color: ['rgba(125,125,125,1)', 'rgba(0,207,255,1)', 'rgba(255,255,255,1)'],

            label: {
              show: true, // 开启显示
              // position: [380, 10],
              formatter: '完好率\n {c}%', // 显示百分号
              textStyle: {
                // 数值样式
                align: 'center',
                width: '45%',
                color: 'white', // 字体颜色
                fontSize: 10, // 字体大小
                fontFamily: 'opposans',
                padding: [0, -20]
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: 'rgba(0, 0, 0, 0.5)',
                // 具体决定了饼状图每一份的颜色显示
                // color: '#FFA07A',
                // 饼状图阴影，值越大阴影亮度越高
                shadowBlur: 20,
                // shadowOffsetX: -50,
                // shadowOffsetY: 50,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: this.circleData2
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

 
}
.circle-title-str{
  font-family: "Zhongheijian";
  font-size: 18px;
  /* height: 6px; */
  margin-left: 4px;
  color: white;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
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
