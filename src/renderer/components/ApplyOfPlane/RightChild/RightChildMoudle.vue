<template>
  <div class="right-child-main">
    <div class="right-child-one">
      <p class="p-style">任务编号</p>
      <p class="p-style">任务总试飞架次</p>
      <p class="p-style">当日试飞架次</p>
      <p class="p-style">剩余架次</p>
    </div>
    <div class="right-child-two">
      <p class="p-style">B-0187B</p>
      <p class="p-style">{{changeTotalNumberOfModels}}</p>
      <p class="p-style">{{changeTotalNumber}}</p>
      <p class="p-style">{{changeStandNumber}}</p>
    </div>
    <div class="right-child-three">
      <div
        id="myChart_rc4"
        :style="{ width: '72px', height: '72px', marginTop: '14px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
export default {
  name: 'rightchildmoudle',
  data() {
    return {
      fromNum: [
        {name: 'totalNumberOfModels', value: 0},
        {name: 'totalNumber', value: 0},
        {name: 'standNumber', value: 0}
      ],

      toNum: [
        {name: 'toTotalNumberOfModels', value: 156},
        {name: 'toTotalNumber', value: 15},
        {name: 'toStandNumber', value: 39}
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
      let myChart_c3 = this.$echarts.init(
        document.getElementById('myChart_rc4')
      );
      // 绘制图表
      myChart_c3.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['blue', '#ccc'],
        series: [
          {
            name: '电子干扰',
            type: 'pie',
            center: ['40%', '40%'], // 饼图的圆心坐标
            radius: ['70%', '80%'],
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
.p-style{
    font-size: 8px;
    height: 1px;
}
.right-child-three{
  margin-left: -30px;
}
.right-child-main {
  display: flex;
  flex-direction: row;
  width: 280px;
  justify-content: space-evenly;
}
.right-child-one {
  display: flex;
  flex-direction: column;
}
.right-child-two {
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  
}
</style>
