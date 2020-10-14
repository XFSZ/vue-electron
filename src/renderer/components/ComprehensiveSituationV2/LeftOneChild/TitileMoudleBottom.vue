<template>
  <div class="threecircle">
    <div class="circle-title">
      <div
        :id="`left1_chart_one_c1${echartIndex}`"
        :style="{ width: '70px', height: '120px', marginTop: '20px' }"
      ></div>
      <p class="p-titlename">{{ titleName }}</p>
      <p class="p-title-str">完好数（营套）</p>
      <p class="p-title-num">{{ changeTotalNumber }}</p>
    </div>

    <div class="circle-title">
      <div
        :id="`left1_chart_one_c2${echartIndex}`"
        :style="{ width: '70px', height: '120px', marginTop: '20px' }"
      ></div>
      <p class="p-titlename">{{ titleName }}</p>
      <p class="p-title-str">完好数（营套）</p>
      <p class="p-title-num">{{ changeTotalNumber }}</p>
    </div>
    <div class="circle-title">
      <div
        :id="`left1_chart_one_c3${echartIndex}`"
        :style="{ width: '70px', height: '120px', marginTop: '20px' }"
      ></div>
      <p class="p-titlename">{{ titleName }}</p>
      <p class="p-title-str">完好数（营套）</p>
      <p class="p-title-num">{{ changeTotalNumber }}</p>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
export default {
  name: 'titilemoudlebottom',
  props: ['goodNumber', 'totalNumber', 'titleName', 'echartIndex'],
  data() {
    return {
      fromNum: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 }
      ],

      toNum: [
        { name: 'toTotalNumberOfModels', value: this.goodNumber },
        { name: 'toTotalNumber', value: this.totalNumber }
      ],
      circle_chart_one_1: [
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
      circle_chart_one_2: [
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
      ],
      circle_chart_one_3: [
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
  created() {
    this.toNum[0].value = this.goodNumber;
    this.toNum[1].value = this.totalNumber;
    // console.log('this is father', this.goodNumber, this.totalNumber);
  },
  computed: {
    changeTotalNumberOfModels() {
      return this.fromNum[0].value.toFixed(0);
    },
    changeTotalNumber() {
      return this.fromNum[1].value.toFixed(0);
    }
  },
  mounted() {
    this.set();
    this.drawLine();
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
      let myChart_c1 = this.$echarts.init(
        document.getElementById(`left1_chart_one_c1${this.echartIndex}`)
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
            radius: ['90%', '98%'],
            // avoidLabelOverlap: false,
            label: {
              position: 'center',
              formatter: '{per|{d}%}\n {a|完好率}',
              rich: {
                // 定义不同地方的文字的字体大小和颜色
                a: {
                  color: '#ffffff',
                  fontSize: 14,
                  fontFamily: 'Zhongheijian'
                },

                per: {
                  color: 'white', // 字体颜色
                  fontSize: 16, // 字体大小
                  fontWeight: 'bold',
                  fontFamily: 'opposans'
                }
              }
            },
            hoverAnimation: false,
            // label: {
            //   //  饼图图形上的文本标签

            //   normal: {
            //     // normal 是图形在默认状态下的样式
            //     show: true,
            //     position: 'center',
            //     color: 'white',
            //     fontSize: 10,
            //     fontWeight: 'bold',
            //     formatter: '{d}%\n{b}' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.circle_chart_one_1
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart_c2 = this.$echarts.init(
        document.getElementById(`left1_chart_one_c2${this.echartIndex}`)
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
            radius: ['90%', '98%'],
            // avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              position: 'center',
              formatter: '{per|{d}%}\n {a|完好率}',
              rich: {
                // 定义不同地方的文字的字体大小和颜色
                a: {
                  color: '#ffffff',
                  fontSize: 14,
                  fontFamily: 'Zhongheijian'
                },

                per: {
                  color: 'white', // 字体颜色
                  fontSize: 16, // 字体大小
                  fontWeight: 'bold',
                  fontFamily: 'opposans'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.circle_chart_one_2
          }
        ]
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart_c3 = this.$echarts.init(
        document.getElementById(`left1_chart_one_c3${this.echartIndex}`)
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
            radius: ['90%', '98%'],
            // avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              position: 'center',
              formatter: '{per|{d}%}\n {a|完好率}',
              rich: {
                // 定义不同地方的文字的字体大小和颜色
                a: {
                  color: '#ffffff',
                  fontSize: 14,
                  fontFamily: 'Zhongheijian'
                },

                per: {
                  color: 'white', // 字体颜色
                  fontSize: 16, // 字体大小
                  fontWeight: 'bold',
                  fontFamily: 'opposans'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.circle_chart_one_3
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.p-titlename {
  font-family: "Zhongheijian";
  font-size: 14px;
  color: aliceblue;
  margin-bottom: 14px;
}
@font-face {
  font-family: "opposans"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/OPPOSans-R.ttf");
}
@font-face {
  font-family: "dinPro"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/DINPro-Bold.otf");
}
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
.p-title-str {
  font-family: "opposans";
  color: aliceblue;
  font-size: 10px;
  /* margin-top: -8px; */
}

.p-title-num {
  font-family: "dinPro";
  color: #00d2fe;
  margin-left: 2px;
  margin-right: 1px;
}
.circle-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
</style>
