<template>
  <div class="circle-title">
    <p class="p-titlename">{{titleName}}</p>
    <p class="p-title-str">完好数（营套）</p>
    <p class="p-title-num">{{changeTotalNumber}}</p>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
export default {
  name: 'titilemoudlebottom',
  props: ['goodNumber', 'totalNumber', 'titleName'],
  data() {
    return {
      fromNum: [
        {name: 'totalNumberOfModels', value: 0},
        {name: 'totalNumber', value: 0}
      ],

      toNum: [
        {name: 'toTotalNumberOfModels', value: this.goodNumber},
        {name: 'toTotalNumber', value: this.totalNumber}
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
.p-titlename{
  font-family: 'Zhongheijian';
  font-size:14px;
  color: aliceblue;
  margin-bottom: 14px
}
@font-face {
  font-family: "opposans"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/OPPOSans-R.ttf");
}
@font-face {
  font-family: "dinPro"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/DINPro-Bold.otf");
}
.p-title-str {
  font-family: 'opposans';
  color: aliceblue;
  font-size: 10px;
  /* margin-top: -8px; */
}

.p-title-num{
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
