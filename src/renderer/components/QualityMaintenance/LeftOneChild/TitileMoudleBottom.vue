<template>
  <div class="circle-title-col">
    <div class="circle-title-row">
      <p class="p-title">完好数</p>
      <p class="span-num">{{ changeTotalNumberOfModels }}</p>
      <p class="p-title-str">具</p>
    </div>
    <div class="circle-title-row">
      <p class="p-title">总数</p>
      <p class="span-num">{{ changeTotalNumber }}</p>
      <p class="p-title-str">具</p>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
export default {
  name: 'titilemoudlebottom',
  props: ['goodNumber', 'totalNumber'],
  data() {
    return {
      fromNum: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 }
      ],

      toNum: [
        { name: 'toTotalNumberOfModels', value: this.goodNumber },
        { name: 'toTotalNumber', value: this.totalNumber }
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
      for (let i = 0; i < this.toNum.length; i++) {
        this.setLite(this.fromNum[i], this.toNum[i].value);
      }
    },
    setLite(obj, val) {
      TweenLite.to(obj, 2, {
        value: val
      });
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
  font-family: "opposans";
  color: aliceblue;
  font-size: 10px;
  /* margin-top: -8px; */
}
.p-title-str{
  font-family: "opposans";
  color: aliceblue;
  font-size: 8px;
}
.span-num {
  font-family: "dinPro";
  color: #00d2fe;
  margin-left: 2px;
  margin-right: 1px;
}
.circle-title-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle-title-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}
/* .circle-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
} */
</style>
