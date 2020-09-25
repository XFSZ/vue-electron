<template>
  <div class="titlemain">
    <div class="title-left">
      <img :src="blockImg" class="block-img" />
      <p class="titlename">{{ leftTitle }}</p>
    </div>
    <div class="hr">
      <hr />
      <!-- <el-divider></el-divider> -->
      <div class="deom_hr"></div>
      <hr />
    </div>
    <div class="table-head">
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">当日飞机动用总数</p>
          <img :src="blankUrl" class="blank-img right-img" />
        </div>

        <div class="table-head-value">
          <span class="table-head-numvalue">{{
            changeTotalNumberOfModels
          }}</span>
          <span class="table-head-strvalue">型</span>
        </div>
      </div>
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">当日弹药动用总数</p>
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
import { TweenLite } from 'gsap';
import BlankImg from '../../../../assets/block.png';
export default {
  name: 'titlemoudle',
  data() {
    return {
      // leftTitle: '飞机',
      blankUrl: BlankImg

    };
  },
  props: ['leftTitle', 'blockImg', 'fromNum', 'toNum'],
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
</style>>
<style scoped>
/* .titlemain .el-divider {
    background-color: #DCDFE6;
    position: relative;
}
.titlemain .el-divider--horizontal{
  height: 0.5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin:auto;
} */
@font-face {
  font-family: "dinPro"; /* 这个名字可以自己定义 */
  src: url("../../../../assets/font/DINPro-Bold.otf");
}

.deom_hr {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}
.hr {
  height: 0.5px;
  /* width: 100%; */
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.block-img {
  height: 20px;
  margin-top: 18px;
  margin-left: 15px;
  margin-bottom: 4px;
}
</style>
<style scoped>
@font-face {
  font-family: "Zhongheijian"; /* 这个名字可以自己定义 */
  src: url("../../../../assets/font/Zhongheijian.ttf");
}
.blank-img {
  width: 6px;
  height: 6px;

  /* margin-top: 10px; */
}
.left-img {
  /* margin-left: 22px; */
}
/* .right-img{

 } */
.title-table-head-main {
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.title-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 4px;

}
.titlename {
  font-family: "Zhongheijian";
  font-size: 18px;
  height: 8px;
  margin-left: 4px;
  color: white;
}
.titlemain {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 20px
  /* align-items: center; */
  /* height: 90%; */
  /* width: 240px; */
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
  margin-top: 6px;
  margin-left: 14px;
  margin-right: 14px;
  background-color:#061d3f;
  justify-content: space-evenly;
}
.table-head-context {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  /* padding-right: 40px; */
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
.table-head-value {
  margin-top: 8px;
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
.table-head-numvalue {
  font-family: 'dinPro';
  color: aqua;
  flex: 1;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 4px;
  background-color:rgb(34, 50, 75)
}
.table-head-strvalue {
  font-family: 'opposans';
  color: whitesmoke;
  text-align: center;
  justify-content: flex-end;
  align-self: center;
  font-size: 12px;
  margin-top: 5px;
}
</style>
