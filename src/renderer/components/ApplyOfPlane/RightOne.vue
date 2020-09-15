<template>
  <div class="mainr">
    <div class="titlemain">
      <p class="titlename">飞机</p>
      <div class="hr">
        <hr />
        <!-- <el-divider></el-divider> -->
        <div class="deom_hr"></div>
        <hr />
      </div>
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
    </div>
    <div
      id="myChart_rose1"
      :style="{
        width: '220px',
        height: '220px',
        marginLeft:'40px'
      }"
    ></div>
    <div class="text-table">
      <div>
        <p class="titlename">科研试飞</p>
        <div class="hr">
          <hr />
          <!-- <el-divider></el-divider> -->
          <div class="deom_hr"></div>
          <hr />
        </div>
      </div>

      <div class="right-text-table-one">
        <p>当日试飞总架次</p>
        <p>{{ changeTotalNumberOfModels }}</p>
      </div>
      <div><right-child-moudle /></div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import RightChildMoudle from './RightChild/RightChildMoudle';
export default {
  name: 'rightlabel',
  components: {
    RightChildMoudle
  },
  data() {
    return {
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
      let myChart6 = this.$echarts.init(
        document.getElementById('myChart_rose1')
      );
      // 绘制图表
      myChart6.setOption({
        // backgroundColor: '#2c343c',

        // title: {
        //   text: 'Customized Pie',
        //   left: 'center',
        //   top: 20,
        //   textStyle: {
        //     color: '#ccc'
        //   }
        // },

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
            radius: '42%',
            center: ['50%', '50%'],
            data: [
              { value: 127, name: '作战备战' },
              { value: 59, name: '非战争军事行动' },
              { value: 67, name: '演练演习' },
              { value: 87, name: '激动转场' },
              { value: 111, name: '日常训练' }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(1, 1, 1, 1)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(1, 1, 1, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#372882',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.right-text-table-one {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.mainr {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 88%;
  width: 280px;
  margin-top: 15px;
  margin-right: 10px;
  /* border: 1px solid darkslategray;
  border-radius: 10px;
  box-shadow: rgb(11, 234, 235) 0px 15px 40px -15px inset; */
}
.deom_hr {
  width: 90%;
  height: 1px;
  background: rgba(0, 0, 0, 0.3);
}
.hr {
  height: 0.5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.titlename {
  height: 6px;
  margin-left: 8px;
}
.text-table {
  display: flex;
  flex-direction: column;
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
