<template>
  <div class="titlemain">
    <div class="title-left">
      <img ref="blockImg" :src="blockImg" class="block-img" />
      <p ref="words" class="titlename">{{ leftTitle }}</p>
    </div>
    <div  class="hr">
      <hr />
      <div ref="hr" class="deom_hr"></div>
      <hr />
    </div>
    <div ref="bgbox" class="table-head">
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img ref="box1" :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">型号总数</p>
          <img ref="box2" :src="blankUrl" class="blank-img right-img" />
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
          <img ref="box3" :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">数量总数</p>
          <img ref="box4" :src="blankUrl" class="blank-img right-img" />
        </div>
        <div class="table-head-value">
          <span class="table-head-numvalue">{{ changeTotalNumber }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
      <div class="table-head-context">
        <div class="title-table-head-main">
          <img ref="box5" :src="blankUrl" class="blank-img left-img" />
          <p class="table-head-title">完好总数</p>
          <img ref="box6" :src="blankUrl" class="blank-img right-img" />
        </div>
        <div class="table-head-value">
          <span class="table-head-numvalue">{{ changeStandNumber }}</span>
          <span class="table-head-strvalue">架</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap';
import SplitText from '../../Common/splittext';
import BlankImg from '../../../assets/block.png';
export default {
  name: 'titlemoudle',
  data() {
    return {
      // leftTitle: '飞机',
      blankUrl: BlankImg,
      words: []
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
    // titleAnimation() {
    //   return this.words;
    // }
  },
  mounted() {
    this.set();
    this.wordsAnimation();
    this.boxAnimation();
    this.blockImgAnimation();
    this.hrAnimation();
    //  this.bgboxAnimation();
  },
  methods: {
    wordsAnimation() {
      const { words } = this.$refs;
      const timeline = new TimelineMax();
      const split = new SplitText(words, { type: 'chars' });
      timeline.from(split.chars, {
        opacity: 0,
        x: 50,
        ease: 'back(0)',
        stagger: {
          from: 'start',
          each: 0.5
        }
      });
    },
    hrAnimation() {
      const { hr } = this.$refs;
      TweenMax.from(hr, 1.5, {
        css: {
          transformOrigin: 'left',
          scale: 0
        }
      });
    },
    boxAnimation() {
      const { box1, box2, box3, box4, box5, box6 } = this.$refs;
      [box1, box2, box3, box4, box5, box6].map(value=>{
        TweenMax.from(value, {
          opacity: 0,
          duration: 0.2,
          yoyo: true,
          repeat: 4,
          stagger: 0.5
        });
      });

    },
    blockImgAnimation() {
      const { blockImg } = this.$refs;
      TweenMax.from(blockImg, 2, {scale: 0.1});
    },
    // 背景推拉 css 搞定 不使用这个 这个只对图片起作用
    bgboxAnimation() {
      const { bgbox } = this.$refs;
      var freewayEaseTween = new TimelineMax({
        // reversed:true,
        paused: true,
        repeat: 10,
        yoyo: true
      });
      // set initial CSS autoAlpha to 0
      // GSAP handles the cross browser vendor prefixes
      freewayEaseTween
        .set(bgbox, { backgroundSize: '100% 100%' })
        // animate CSS autoAlpha to 1
        .to(bgbox, 5, {
          backgroundSize: '+=25% +=25%',
          autoRound: false
        })
        .progress(1)
        .progress(0)
        .play();
    },
    set() {
      for (let i = 0; i < this.toNum.length; i++) {
        this.setLite(this.fromNum[i], this.toNum[i].value);
      }
    },
    setLite(obj, val) {
      TweenMax.to(obj, 2, {
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
</style>
>
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
  src: url("../../../assets/font/DINPro-Bold.otf");
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
  /* transform:scale() */
}
</style>
<style scoped>
@font-face {
  font-family: "Zhongheijian"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/Zhongheijian.ttf");
}
.blank-img {
  width: 6px;
  height: 6px;
}

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
  margin-top: 20px;
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
@keyframes gradient {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
.table-head {
  display: flex;
  flex-direction: row;
  margin-top: 6px;
  margin-left: 14px;
  margin-right: 14px;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    #061d3f 50%,
    #061d3f 100%
  );
  background-size: 200% 100%;
  animation: gradient 1.5s;
  animation-fill-mode: forwards;
  animation-direction: reverse;
  /* background-image: linear-gradient(to right,#061d3f,#061d3f); */
  /* background-size:0%; */
  /* animation: mysecond 5s; */
  /* transform-origin: left center; */
}
.table-head-context {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  padding-right: 10px;
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
  font-family: "dinPro";
  color: aqua;
  flex: 1;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 4px;
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
