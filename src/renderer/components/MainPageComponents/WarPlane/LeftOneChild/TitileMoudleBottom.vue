<template>
  <div class="col">
    <div class="row">
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">发动机型号总数</p>
          <img :src="blankUrl" class="blank-img right-img" />
        </div>
        <div class="table-head-value">
          <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">发动机总数</p>
          <img :src="blankUrl" class="blank-img right-img" />
        </div>
        <div class="table-head-value">
          <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
      <div class="table-head-context">
         <div class="circle-title-col">
    <div class="circle-title-row">
      <p class="p-title">完好数</p>
      <p class="span-num">{{ changeTotalNumberOfModels }}</p>
      <p class="p-title-str">部</p>
    </div>
    <div class="circle-title-row">
      <p class="p-title">备份数</p>
      <p class="span-num">{{ changeTotalNumber }}</p>
      <p class="p-title-str">部</p>
    </div>
  </div>
      </div>
    </div>
    <div class="row">
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">航材存储总量</p>
          <img :src="blankUrl" class="blank-img right-img" />
        </div>
        <div class="table-head-value">
          <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">库存航材总量</p>
          <img :src="blankUrl" class="blank-img right-img" />
        </div>
        <div class="table-head-value">
          <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">周转航材总量</p>
          <img :src="blankUrl" class="blank-img right-img" />
        </div>
        <div class="table-head-value">
          <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlankImg from '../../../../assets/block.png';
import { TweenLite } from 'gsap';
export default {
  name: 'titilemoudlebottom',
  props: ['goodNumber', 'totalNumber'],
  data() {
    return {
      blankUrl: BlankImg,
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
  src: url("../../../../assets/font/OPPOSans-R.ttf");
}
@font-face {
  font-family: "dinPro"; /* 这个名字可以自己定义 */
  src: url("../../../../assets/font/DINPro-Bold.otf");
}
.p-title {
  font-family: "opposans";
  color: aliceblue;
  font-size: 12px;
  /* margin-top: -8px; */
}
.p-title-str{
  font-family: "opposans";
  color: aliceblue;
  font-size: 10px;
  margin-top: 4px;
}
.span-num {
  font-family: "dinPro";
  color: #00d2fe;
  margin-left: 2px;
  margin-right: 1px;
  width: 50px;
}
.circle-title-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      margin-right: 34px;
    margin-left: 34px;
}
.circle-title-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
}
.row {
  display: flex;
  flex-direction: row;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
  background-color: #061d3f;
  margin-top: 24px;
}
.table-head-context {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #061d3f;
  padding-right: 10px;
}
.title-table-head-main {
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.table-head-title {
  font-family: "Zhongheijian";
  color: whitesmoke;
  /* flex: 1; */
  text-align: center;
  font-size: 16px;
  margin-left: 4px;
  margin-right: 4px;
}
.blank-img {
  width: 6px;
  height: 6px;
}
.table-head-value {
  margin-top: 8px;
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
.table-head-numvalue {
  font-family: "dinPro";
  color: aqua;
  flex: 1;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  width: 136px;
  background-color: rgb(34, 50, 75);
}
.table-head-strvalue {
  font-family: "opposans";
  color: whitesmoke;
  text-align: center;
  justify-content: flex-end;
  align-self: center;
  font-size: 12px;
  margin-top: 5px;
}



</style>
