<template>
  <div class="main">
    <title-moudle :blockImg="flyUrl" :leftTitle="leftTitle1" :fromNum='fromNum' :toNum='toNum' />
    <div
      id="myChart_bar1"
      :style="{ width: '500px', height: '368px' ,marginTop: '-38px' ,    marginLeft: '30px',marginRight: '60px' }"
    ></div>
    <title-moudle :blockImg="logisticsUrl" :leftTitle="leftTitle2" :fromNum='fromNum' :toNum='toNum' />
    <div
      id="myChart_bar2"
      :style="{ width: '500px', height: '368px',marginTop: '-38px',    marginLeft: '30px',marginRight: '60px' }"
    ></div>
    <div class="threecircle">
      <div class="title-left">
        <img :src="flyUrl" class="block-img" />
        <p class="titlename">值班兵力</p>
      </div>
      <!-- <p class="titlename">值班兵力</p> -->
      <div class="hr">
        <hr />
        <!-- <el-divider></el-divider> -->
        <div class="deom_hr"></div>
        <hr />
      </div>
      <div class="table-bottom">
        <div class="table-head">
          <div class="table-head-context">
            <div class="title-table-head-main">
              <img :src="blankUrl" class="blank-img left-blank-img" />
              <p class="table-head-title">飞机值班总数</p>
            </div>
            <div class="table-head-value">
              <span class="table-head-numvalue">{{
                changeTotalNumberOfModels
              }}</span>
              <span class="table-head-strvalue">次</span>
            </div>
          </div>
          <div class="table-head-context">
               <div class="title-table-head-main">
              <img :src="blankUrl" class="blank-img left-blank-img" />
            <p class="table-head-title">地导营值班总数</p>
             </div>
            <div class="table-head-value">
              <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
              <span class="table-head-strvalue">次</span>
            </div>
          </div>
          <div class="table-head-context">
               <div class="title-table-head-main">
              <img :src="blankUrl" class="blank-img left-blank-img" />
            <p class="table-head-title">雷达值班总数</p>
             </div>
            <div class="table-head-value">
              <span class="table-head-numvalue">{{ changeStandNumber }}</span>
              <span class="table-head-strvalue">次</span>
            </div>
          </div>
        </div>
        <div class="circle-title">
          <div
            id="myChart_tc1"
            :style="{
              width: '380px',
              height: '180px',
              marginTop: '20px',
             
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import TitleMoudle from './LeftOneChild/TitleMoudle';
import TitleMoudleBottom from './LeftOneChild/TitileMoudleBottom';
import BG from '../../assets/pie-label.png';
import FlyImg from '../../assets/fly.png';
import LogisticsImg from '../../assets/logistics.png';
import BlankImg from '../../assets/block.png';
export default {
  name: 'lefttwo',
  components: {
    TitleMoudle,
    TitleMoudleBottom
  },
  data() {
    return {
      leftTitle1: '地导',
      leftTitle2: '雷达',
      leftTitle3: '值班兵力',
      flyUrl: FlyImg,
      logisticsUrl: LogisticsImg,
      blankUrl: BlankImg,
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
      // 基于准备好的dom，初始化echarts实例
      var that = this;
      let myChart = this.$echarts.init(document.getElementById('myChart_bar1'));
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
          interval: 20,
          splitLine: { // 网格线
            'show': false
          }
        },
        yAxis: {
          type: 'category',
          data: ['弹炮系统', '四代', '三代', '二代', '一代'],
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
      let myChart1 = this.$echarts.init(
        document.getElementById('myChart_bar2')
      );
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
          data: ['四代', '三代', '二代', '一代'],
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
              position: [350, 10],
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
        document.getElementById('myChart_tc1')
      );
      let datas = ['一等值班', '二等值班', '三等值班'];
      // 绘制图表
      myChart_c1.setOption({
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
          right: 4,
          // top: 8,
          bottom: 4,
          //   left: 5,
          //   position: [180, 10],
          data: ['一等值班', '二等值班', '三等值班'],
          //   textStyle: {
          //     // 图例文字的样式
          //     // color: '#333', // 文字颜色
          //     fontSize: 12 // 文字大小
          //   }
          formatter: function(name) {
            let seriesObj;
            for (let i = 0; i < datas.length; i++) {
              if (datas[i] === name) {
                seriesObj = datas[i];
                break;
              }
            }
            var arr = [
              '{a|' + name + '}' + '\n {b|' + '次数   ' + '100' + '次' + '}'
            ];
            return arr;
          },
          //   formatter: [
          //     '{a|}',
          //     '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
          //   ].join('\n'),
          textStyle: {
            rich: {
              a: {
                color: 'white',
                lineHeight: 20,
                height: 18,
                fontSize: 14, // 文字大小
                fontFamily: 'Zhongheijian'
              },
              b: {
                height: 12,
                color: '#878b91', // 文字颜色
                lineHeight: 20,
                fontSize: 12, // 文字大小
                fontFamily: 'Zhongheijian'
              }
            }
          }
        },
        graphic: {
          elements: [ { // 将图片定位到最下方的中间：
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
          }]},
        series: [
          {
            name: '值班兵力',
            type: 'pie', // 环形图的type和饼图相同
            // radius: ['50%', '70%'], // 饼图的半径，第一个为内半径，第二个为外半径
            center: ['36%', '44%'], // 饼图的圆心坐标
            radius: ['74%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            color: ['#7d7d7d', '#00cfff', '#ffffff'],
            //           label: {
            //   normal: {
            //     // 正常的样式
            //     // formatter: '{img1|}',
            //     // rich: {
            //     //   // 这里设置您的图片引用名称
            //     //   height: 10,

            //     //   img1: {
            //     //     // 引入图片
            //     //     backgroundColor: '#D1FBEF'
            //     //     // backgroundColor: {

            //     //     //   image: '../assets/left-bottom-backgourd2.png'
            //     //     // }
            //     //   }
            //     // },
            //     rich: {
            //       img1: {
            //         // height: '20px',
            //         height: 60,
            //         width: 60,
            //         backgroundColor: {
            //           image: bg
            //         }
            //       }
            //     },
            //     // formatter: function(param) {
            //     //   var res = '';
            //     //   res += param.value +
            //     // '\n {img1|}';
            //     //   return res;
            //     // },
            //     formatter: '{img1|}',
            //     show: true,
            //     position: 'center'
            //     // formatter: '{d}%\n{b}'
            //   },
            //   emphasis: {
            //     // 选中时候的样式
            //     show: true,
            //     textStyle: {
            //       fontSize: '10',
            //       fontWeight: 'bold'
            //     }
            //   }
            // }, // 提示文字
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
                padding: [0, -30]

              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
              // 具体决定了饼状图每一份的颜色显示
              // color: '#FFA07A',
              // 饼状图阴影，值越大阴影亮度越高
                shadowBlur: 20,
                shadowOffsetX: -50,
                shadowOffsetY: 50,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              // shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              { value: 40, name: '一等值班' },
              { value: 36, name: '二等值班' },
              { value: 24, name: '三等值班' }
            ]
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
.blank-img {
  width: 4px;
  height: 4px;
  /* margin-top: 10px; */
  /* margin-left: 20px; */
  /* margin-top: 10px; */
}
.title-table-head-main {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  align-items: center;
}
.block-img {
  height: 20px;
  margin-top: 18px;
  margin-left: 10px;
  margin-bottom: 5px;
}
.title-left {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.deom_hr {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}
.hr {
  height: 0.5px;
  /* width: 100%; */
  /* width: 280px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
.titlename {
  font-family: "Zhongheijian";
  font-size: 18px;
  height: 8px;
  margin-left: 4px;
  color: white;
}
.table-bottom {
  display: flex;
  flex-direction: row;
}
.circle-title {
  display: flex;
  flex: 3;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  /* align-self: end; */
}
.threecircle {
  /* width: 350px; */
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
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
  /* height: 90%;
  width: 90%; */
  /* height: 88%; */
  margin-top: 15px;
  /* border: 1px solid darkslategray;
  border-radius: 10px;
  box-shadow: rgb(11, 234, 235) 0px 15px 40px -15px inset; */
}
.table-head {
    display: flex;
    flex-direction: column;
    margin-top: 4px;
    /* align-items: center; */
    flex: 1;
    /* margin-left: 16px; */
  /* margin-left: 2px; */
}
.table-head-context {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color:#061d3f;
}
.table-head-title {
  font-family: "Zhongheijian";
  color: whitesmoke;
  /* flex: 1; */
  margin-left: 6px;
  text-align: center;
  font-size: 16px;
}
.table-head-value {
  /* flex: 1; */

  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  /* height: 20px; */
      /* margin-top: -14px */
  /* margin-top: -14px; */
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.table-head-numvalue {
  font-family: "dinPro";
  color: aqua;
  flex: 1;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  /* margin-left: 20px; */
  background-color: rgb(34, 50, 75);
}
.table-head-strvalue {
  font-family: "opposans";
  color: whitesmoke;
  text-align: center;
  justify-content: flex-end;
  align-self: flex-end;
  font-size: 12px;
  /* margin-top: 5px; */
}
</style>
