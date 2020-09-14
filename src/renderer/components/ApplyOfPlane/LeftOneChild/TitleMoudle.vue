<template>
  <div class="titlemain">
    <p class="titlename">飞机</p>
    <div class="hr">
      <hr />
      <!-- <el-divider></el-divider> -->
    <div class="deom_hr"></div>
      <hr />
    </div>
    <div  class="table-head">
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
</template>

<script>
import { TweenLite } from 'gsap';
export default {
  name: 'titlemoudle',
  data() {
    return {
      fromNum: [
        {name: 'totalNumberOfModels', value: 0},
        {name: 'totalNumber', value: 0},
        {name: 'standNumber', value: 0}
      ],

      toNum: [
        {name: 'toTotalNumberOfModels', value: 157},
        {name: 'toTotalNumber', value: 132461},
        {name: 'toStandNumber', value: 111574}
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
.titlemain .el-divider {
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
}
.deom_hr{width:90%; height:1px; background:rgba(0, 0, 0, 0.3);}
.hr{
  height: 0.5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>
<style  scoped>

.titlename{
  height: 6px;
}
.titlemain {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* height: 90%; */
  width: 100%;
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
}
</style>
