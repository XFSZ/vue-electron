<template>
  <div class="circle-title">
    <p class="p-title">完好数<span class="span-num">{{changeTotalNumberOfModels}}</span>具</p>
    <p class="p-title">总数{{changeTotalNumber}}具</p>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
export default {
  name: 'titilemoudlebottom',

  data() {
    return {
      fromNum: [
        {name: 'totalNumberOfModels', value: 0},
        {name: 'totalNumber', value: 0}
      ],

      toNum: [
        {name: 'toTotalNumberOfModels', value: 15784},
        {name: 'toTotalNumber', value: 18713}
      ]
    };
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
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "opposans"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/OPPOSans-R.ttf");
}
@font-face {
  font-family: "dinPro"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/DINPro-Bold.otf");
}
.p-title {
  font-family: 'opposans';
  color: aliceblue;
  font-size: 10px;
  margin-top: -8px;
}
.span-num{
  font-family: 'dinPro';
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
