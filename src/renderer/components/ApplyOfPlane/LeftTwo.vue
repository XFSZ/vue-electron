<template>
  <div class="main">
    <title-moudle :blockImg='flyUrl' :leftTitle='leftTitle1' />
    <div
      id="myChart_bar1"
      :style="{ width: '220px', height: '218px', marginTop: '-38px' }"
    ></div>
    <title-moudle   :blockImg='logisticsUrl' :leftTitle='leftTitle2' />
    <div
      id="myChart_bar2"
      :style="{ width: '220px', height: '218px', marginTop: '-38px' }"
    ></div>
    <div class="threecircle">
      <p class="titlename">值班兵力</p>
      <div class="hr">
        <hr />
        <!-- <el-divider></el-divider> -->
        <div class="deom_hr"></div>
        <hr />
      </div>
      <div class="table-bottom">
        <div class="table-head">
          <div class="table-head-context">
            <p class="table-head-title">型号总数</p>
            <div class="table-head-value">
              <span class="table-head-numvalue">{{
                changeTotalNumberOfModels
              }}</span>
              <span class="table-head-strvalue">型</span>
            </div>
          </div>
          <div class="table-head-context">
            <p class="table-head-title">数量总数</p>
            <div class="table-head-value">
              <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
              <span class="table-head-strvalue">架</span>
            </div>
          </div>
          <div class="table-head-context">
            <p class="table-head-title">完好总数</p>
            <div class="table-head-value">
              <span class="table-head-numvalue">{{ changeStandNumber }}</span>
              <span class="table-head-strvalue">架</span>
            </div>
          </div>
        </div>
        <div class="circle-title">
          <div
            id="myChart_tc1"
            :style="{ width: '160px', height: '90px', marginTop: '20px' ,    marginLeft: '8px' }"
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
import bg from '../../assets/pie-label.png';
import FlyImg from '../../assets/fly.png';
import LogisticsImg from '../../assets/logistics.png';
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
      fromNum: [
        {name: 'totalNumberOfModels', value: 0},
        {name: 'totalNumber', value: 0},
        {name: 'standNumber', value: 0}
      ],

      toNum: [
        {name: 'toTotalNumberOfModels', value: 157},
        {name: 'toTotalNumber', value: 132461},
        {name: 'toStandNumber', value: 111574}
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
      for (let i = 0;i < this.toNum.length ;i++) {
        this.setLite(this.fromNum[i], this.toNum[i].value);
      }
    },
    setLite(obj, val) {
      TweenLite.to(obj, 2, {
        value: val
      },
      );
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
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
          right: 0.01,
          // top: 0.1,
          // bottom: 10,
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
            for (let i = 0;i < datas.length;i++) {
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
                color: 'red',
                lineHeight: 8,
                fontSize: 8 // 文字大小
              },
              b: {
                color: '#333', // 文字颜色
                fontSize: 6 // 文字大小
              }

            }
          }
        },
        series: [
          {
            name: '值班兵力',
            type: 'pie', // 环形图的type和饼图相同
            // radius: ['50%', '70%'], // 饼图的半径，第一个为内半径，第二个为外半径
            center: ['30%', '40%'], // 饼图的圆心坐标
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            color: ['#D1FBEF', '#F9D858', '#4CD0DD'],
            label: {
              normal: {
                // 正常的样式
                // formatter: '{img1|}',
                // rich: {
                //   // 这里设置您的图片引用名称
                //   height: 10,

                //   img1: {
                //     // 引入图片
                //     backgroundColor: '#D1FBEF'
                //     // backgroundColor: {

                //     //   image: '../assets/left-bottom-backgourd2.png'
                //     // }
                //   }
                // },
                rich: {
                  img1: {
                    // height: '20px',
                    height: 30,
                    width: 30,
                    backgroundColor: {
                      image: bg

                    }
                  }
                },
                // formatter: function(param) {
                //   var res = '';
                //   res += param.value +
                // '\n {img1|}';
                //   return res;
                // },
                formatter: '{img1|}',
                show: true,
                position: 'center'
                // formatter: '{d}%\n{b}'
              },
              emphasis: { // 选中时候的样式
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'bold'
                }
              }
            }, // 提示文字
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '一等值班' },
              { value: 310, name: '二等值班' },
              { value: 234, name: '三等值班' }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.deom_hr {
  width: 90%;
  height: 1px;
  background: rgba(0, 0, 0, 0.3);
}
.hr {
  height: 0.5px;
  /* width: 100%; */
  width: 280px;
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
  height: 6px;
  align-self: start;
}
.table-bottom{
  display: flex;
  flex-direction: row;

}
.circle-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  /* align-self: end; */
}
.threecircle {
  /* width: 350px; */
  margin-left: 10px;
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
  height: 88%;
  margin-top: 15px;
  /* border: 1px solid darkslategray;
  border-radius: 10px;
  box-shadow: rgb(11, 234, 235) 0px 15px 40px -15px inset; */
}
.table-head {
  display: flex;
  flex-direction: column;
  /* margin-left: 2px; */
}
.table-head-context {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.table-head-title {
  /* flex: 1; */
  text-align: center;
  /* height: 5px; */
  font-size: 10px;
}
.table-head-value {
  /* flex: 1; */
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  height: 10px;
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
}
</style>
