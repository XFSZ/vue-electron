<template>
  <div class="title-moudle">
    <p class="title-style">{{ titleName }}</p>

    <div class="right-child-main">
      <div class="right-child-one">
        <div class="title-table-head-main">
          <div class="title-str-value">
            <img :src="blankUrl" class="blank-img left-img" />
            <p class="p-style-str">供应数</p>
            <img :src="blankUrl" class="blank-img left-img" />
          </div>
          <p class="p-style-num">1357</p>
          <span class="table-head-strvalue">型</span>
        </div>
        <div class="title-table-head-main">
          <div class="title-str-value">
            <img :src="blankUrl" class="blank-img left-img" />
            <p class="p-style-str">完好数</p>
            <img :src="blankUrl" class="blank-img left-img" />
          </div>
          <p class="p-style-num">1357</p>
          <span class="table-head-strvalue">型</span>
        </div>
      </div>

      <div class="right-child-three">
        <div
          :id="`list_chart_${indexkey}`"
          :style="{ width: '100px', height: '100px', marginTop: '38px' ,paddingLeft:'14px' }"
        ></div>
        <div>
          <p class="right-child-three-p">
            总数
            <span class="right-child-three-num"
              >18713 <span class="right-child-three-p-str">型</span></span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import BlankImg from '../../../assets/block.png';
export default {
  name: 'rightchildmoudle',
  props: ['indexkey', 'titleName', 'circleData'],
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
        document.getElementById(`list_chart_${this.indexkey}`)
      );
      // 绘制图表
      myChart_c3.setOption({
        // tooltip: {
        //   trigger: 'item',
        //   formatter: '{a} <br/>{b}: {c} ({d}%)'
        // },
        color: ['#00b3ff', '#ccc'],
        series: [
          {
            // name: '电子干扰',
            type: 'pie',
            center: ['40%', '40%'], // 饼图的圆心坐标
            radius: ['74%', '80%'],
            avoidLabelOverlap: false,
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
            // label: {
            //   //  饼图图形上的文本标签

            //   normal: {
            //     // normal 是图形在默认状态下的样式
            //     show: true,
            //     position: 'center',
            //     color: '#ccc',
            //     fontSize: 14,
            //     fontFamily: 'Zhongheijian',
            //     // fontWeight: 'bold',
            //     formatter: '{d}%\n{b}' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，

            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.circleData
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
.right-child-three-p{
    font-family: "opposans";
  color: whitesmoke;
  font-size: 12px;
  text-align: center;
}
.right-child-three {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-str-value {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.title-moudle {
  display: flex;
  flex-direction: column;
  /* margin-top: 6px; */
  margin-top: 24px;
  /* width: 280px; */
  /* justify-content: space-evenly; */
  /* border-style: solid;
  margin-left: 30px;
  margin-right: 30px;
  border-width: 1px;
  border-color: #1a2639; */
}
.title-style {
  font-family: "Zhongheijian";
  color: whitesmoke;
  font-size: 20px;
  text-align: center;
}
.table-head-strvalue {
  font-family: "opposans";
  color: whitesmoke;
  text-align: center;
  justify-content: flex-end;
  align-self: center;
  font-size: 12px;
  margin-left: 20px;
  margin-top: 15px;
}
.p-style-str {
  font-family: "Zhongheijian";
  color: whitesmoke;
  font-size: 14px;
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
  padding-left: 20px;
  padding-right: 20px;
  font-size: 28px;
  background-color: rgb(34, 50, 75);
}
.title-table-head-main {
  width: 300px;
  margin-left: -40px;
  margin-top: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #061d3f;
}
.blank-img {
  width: 6px;
  height: 6px;

  /* margin-top: 10px; */
  margin-right: 10px;
  margin-left: 10px;
}

.right-child-main {
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  /* width: 280px; */
  justify-content: space-evenly;
  /* border-style: solid;
  margin-left: 30px;
  margin-right: 30px;
  border-width: 1px;
  border-color: #1a2639; */
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
