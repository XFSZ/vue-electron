<template>
  <div class="right-child-main">
    <div class="right-child-one">
      <div class="title-table-head-main">
        <img :src="blankUrl" class="blank-img left-img" />
        <p class="p-style-str">任务编号</p>
      </div>
      <div class="title-table-head-main">
        <img :src="blankUrl" class="blank-img left-img" />
        <p class="p-style-str">任务总试飞架次</p>
      </div>
      <div class="title-table-head-main">
        <img :src="blankUrl" class="blank-img left-img" />
        <p class="p-style-str">当日试飞架次</p>
      </div>
      <div class="title-table-head-main">
        <img :src="blankUrl" class="blank-img left-img" />
        <p class="p-style-str">剩余架次</p>
      </div>
    </div>
    <div class="right-child-two">
      <p class="p-style-num">B-0187B</p>
      <p class="p-style-num">{{ changeTotalNumberOfModels }}</p>
      <p class="p-style-num">{{ changeTotalNumber }}</p>
      <p class="p-style-num">{{ changeStandNumber }}</p>
    </div>
    <div class="right-child-three">
      <div
        id="myChart_rc4"
        :style="{ width: '100px', height: '100px', marginTop: '14px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import BlankImg from '../../../assets/block.png';
export default {
  name: 'rightchildmoudle',

  data() {
    return {
      blankUrl: BlankImg,
      fromNum: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],

      toNum: [
        { name: 'toTotalNumberOfModels', value: 156 },
        { name: 'toTotalNumber', value: 15 },
        { name: 'toStandNumber', value: 39 }
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
      let myChart_c3 = this.$echarts.init(
        document.getElementById('myChart_rc4')
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
            center: ['40%', '40%'], // 饼图的圆心坐标
            radius: ['74%', '80%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              //  饼图图形上的文本标签

              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: 'center',
                color: '#ccc',
                fontSize: 8,
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
  src: url("../../../assets/font/Zhongheijian.ttf");
}
@font-face {
  font-family: "dinPro"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/DINPro-Bold.otf");
}
.p-style-str {
  font-family: "Zhongheijian";
  color: whitesmoke;
  font-size: 16px;
  /* height: 1px; */
}
.p-style-num {
  font-family: "dinPro";
  color: aqua;
  /* flex: 1; */
  /* height: 1px; */
  text-align: center;
  justify-content: center;
  margin-left: 20px;
  margin-top: 1px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  background-color: rgb(34, 50, 75);
}
.title-table-head-main {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.blank-img {
  width: 6px;
  height: 6px;

  /* margin-top: 10px; */
  margin-right: 4px;
}
.right-child-three {
  margin-left: -30px;
}
.right-child-main {
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  /* width: 280px; */
  justify-content: space-evenly;
  border-style: solid; 
  border-width: 1px;
  border-color: #1a2639;
}
.right-child-one {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right-child-two {
  display: flex;
  /* margin-top: 11px; */
  flex-direction: column;
  justify-content: center;
  margin-left: -30px;
}
</style>
