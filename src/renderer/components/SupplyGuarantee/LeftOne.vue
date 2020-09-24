<template>
  <div class="main">
    <top-title :imgUrl="flyUrl" :titleName="toptitlename1" />
        <div class="right-text-table-top-one">
          <div class="title-table-head-main">
            <img :src="blankUrl" class="blank-img left-blank-img" />
            <p class="title-child">当日接装飞机总数</p>
            <img :src="blankUrl" class="blank-img right-blank-img" />
          </div>
          <div class="right-text-table-top-two">
            <div class="table-head-top-value">
              <span class="table-head-top-numvalue">{{
                changeTotalNumberOfModels
              }}</span>
              <span class="table-head-top-strvalue">架</span>
            </div>
          </div>
        </div>
    <div class="table-col">
      <right-child-moudle :indexkey="1" :circleData="circleData" />
      </div>
    <div class="table-col"><right-child-moudle :indexkey="2"  :circleData="circleData"/></div>

        <top-title :imgUrl="gmUrl" :titleName="toptitlename2" />
        <div class="right-text-table-top-one">
          <div class="title-table-head-main">
            <img :src="blankUrl" class="blank-img left-blank-img" />
            <p class="title-child">当日接装地导总数</p>
            <img :src="blankUrl" class="blank-img right-blank-img" />
          </div>
          <div class="right-text-table-top-two">
            <div class="table-head-top-value">
              <span class="table-head-top-numvalue">{{
                changeTotalNumberOfModels
              }}</span>
              <span class="table-head-top-strvalue">营套</span>
            </div>
          </div>
        </div>
    <div class="table-col"><right-child-moudle :indexkey="3" :circleData="circleData" /></div>
    <div class="table-col"><right-child-moudle :indexkey="4" :circleData="circleData"/></div>

        <top-title :imgUrl="radarUrl" :titleName="toptitlename3" />
        <div class="right-text-table-top-one">
          <div class="title-table-head-main">
            <img :src="blankUrl" class="blank-img left-blank-img" />
            <p class="title-child">当日接装地导总数</p>
            <img :src="blankUrl" class="blank-img right-blank-img" />
          </div>
          <div class="right-text-table-top-two">
            <div class="table-head-top-value">
              <span class="table-head-top-numvalue">{{
                changeTotalNumberOfModels
              }}</span>
              <span class="table-head-top-strvalue">部</span>
            </div>
          </div>
        </div>
    <div class="table-col"><right-child-moudle :indexkey="5" :circleData="circleData"/></div>
    <div class="table-col"><right-child-moudle :indexkey="6" :circleData="circleData"/></div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import TopTitle from './TopTitle/TopTitle';
import TitleMoudle from './LeftOneChild/TitleMoudle';
import TitleMoudleBottom from './LeftOneChild/TitileMoudleBottom';
import BlankImg from '../../assets/block.png';
import RightChildMoudle from './RightChild/RightChildMoudle';
import FlyImg from '../../assets/fly.png';
import LogisticsImg from '../../assets/logistics.png';
import RaderImg from '../../assets/radar.png';
import GMImg from '../../assets/ground-missile.png';

import axios from 'axios';
// const baseurl = 'http://192.168.37.130:7300/mock/5f6473cac01e510020e2f086/example/';

export default {
  name: 'hello',
  components: {
    TitleMoudle,
    TitleMoudleBottom,
    RightChildMoudle,
    TopTitle
  },
  computed: {
    changeTotalNumberOfModels() {
      return this.fromNum1[0].value.toFixed(0);
    },
    changeTotalNumber() {
      return this.fromNum1[1].value.toFixed(0);
    },
    changeStandNumber() {
      return this.fromNum1[2].value.toFixed(0);
    }
  },
  created() {
    axios
      .get(this.$commonvalue.baseurl + 'dpService/getFjslsjFj', {
        // 还可以直接把参数拼接在url后边
        params: {
          title: '眼镜'
        }
      })
      .then(function(res) {
        res.data;
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      toptitlename1: '飞机接装',
      toptitlename2: '地导调配',
      toptitlename3: '雷达调配',
      flyUrl: FlyImg,
      gmUrl: GMImg,
      radarUrl: RaderImg,
      blankUrl: BlankImg,
      logisticsUrl: LogisticsImg,
      googNumber1: 15784,
      googNumber2: 4713,
      googNumber3: 1713,
      totalNumber1: 18713,
      totalNumber2: 4971,
      totalNumber3: 1987,
      fromNum1: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      fromNum2: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      fromNum3: [
        { name: 'totalNumberOfModels', value: 0 },
        { name: 'totalNumber', value: 0 },
        { name: 'standNumber', value: 0 }
      ],
      toNum1: [
        { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }
      ],
      toNum2: [
        { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }
      ],
      toNum3: [
        { name: 'toTotalNumberOfModels', value: 157 },
        { name: 'toTotalNumber', value: 132461 },
        { name: 'toStandNumber', value: 111574 }
      ],
      circleData: [
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

    };
  },

  mounted() {
    this.drawLine();
    this.set();
  },
  methods: {
    set() {
      for (let i = 0; i < this.toNum1.length; i++) {
        this.setLite(this.fromNum1[i], this.toNum1[i].value);
      }
    },
    setLite(obj, val) {
      TweenLite.to(obj, 2, {
        value: val
      });
    },
    drawLine() {}
  }
};
</script>

<style scoped>
.table-col{
  margin-left: 30px;
  margin-right: 30px;
}
.table-head-top-strvalue {
  font-family: "opposans";
  color: whitesmoke;
  text-align: center;
  justify-content: flex-end;
  align-self: center;
  font-size: 12px;
  margin-top: 5px;
  margin-right: 20px;
}
.table-head-top-value {
  margin-top: 8px;
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
.right-text-table-top-two {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.table-head-top-numvalue {
  font-family: "dinPro";
  color: aqua;
  flex: 1;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  margin-left: 34px;
  margin-right: 4px;
  width: 120px;
  background-color: rgb(34, 50, 75);
}
.right-text-table-top-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  justify-content: space-evenly;
  background-color: #061d3f;
      margin-left: 30px;
    margin-right: 30px;
    margin-top: 6px;
}
.right-text-table-one {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: space-evenly;
  background-color: #061d3f;
}
.title-table-head-main {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.blank-img {
  width: 4px;
  height: 4px;

  /* margin-top: 12px; */
}
.title-child-num {
  font-family: "dinPro";
  font-size: 34px;
  color: aqua;
  padding-left: 30px;
  padding-right: 30px;
  /* flex: 1; */
  /* text-align: center; */
  /* justify-content: center; */
  /* margin-left: 20px; */
  background-color: rgb(34, 50, 75);
}
.title-child {
  font-family: "Zhongheijian";
  font-size: 18px;
  /* height: 6px; */
  margin-left: 4px;
  color: white;
  margin-right: 4px;
  /* margin-top: 4px; */
}
.circle-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
}
.threecircle {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
}
.chart {
  width: "300px";
  height: "300px";
}
.p-title {
  font-size: 10px;
  /* margin-top: -8px; */
}
.main {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* height: 88%; */
  margin-top: 15px;
  /* width: 280px; */
  /* width: 90%; */
  /* border: 1px solid darkslategray;
  border-radius: 10px;
  box-shadow: rgb(11, 234, 235) 0px 15px 40px -15px inset; */
}
.table-head {
  display: flex;
  flex-direction: row;
}
.table-head-context {
  /* flex: 1; */
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
