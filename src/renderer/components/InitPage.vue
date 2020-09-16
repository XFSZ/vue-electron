<template>
  <div class="wapper">
    <div class="headinfo">
      <div class="headinfo-left">
        <p class="head-strstyle head-strstyle-lr">
          作战时间 2019年12月30日 12时34分10秒
        </p>
      </div>
      <div class="headinfo-content">
        <img :src="titleLeftUrl" class="title-img-left" />
        <p class="head-strstyle head-strstyle-mid">空军作战部队指挥系统</p>
        <img :src="titleRightUrl" class="title-img-left" />
      </div>
      <div class="headinfo-right">
        <p class="head-strstyle head-strstyle-lr">
          天文时间 2019年12月30日 12时34分10秒 天气14C 湿度65% 风力7级
        </p>
      </div>
    </div>
    <div class="main">
      <div class="main-left">
        <left-one class="left-one-style" />
        <left-two class="left-two-style" />
      </div>
      <div class="main-content">
        <p>cccc</p>
      </div>
      <div class="main-right">
        <right-one class="right-style" />
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div class="footer-left-one">
          <p class="footer-left-one-span">
            【演习-2019】空115团完好率低于70%，可用飞机不足。
          </p>
          <img :src="blackUrl" class="black-img-text" />
        </div>
        <div class="footer-left-task">
          <img :src="taskUrl" class="img-style" />
          <p class="left-bottom-p">任务</p>
        </div>
        <p class="left-bottom-p-num">03</p>
        <img :src="splitLineUrl" class="split-line" />
        <div class="footer-left-equipment left-bottom-split">
          <img :src="equipmentUrl" class="img-style" />
          <p class="left-bottom-p">装备</p>
        </div>
        <p class="left-bottom-p-num">02</p>
        <img :src="splitLineUrl" class="split-line" />
        <div class="footer-left-report left-bottom-split">
          <img :src="reportUrl" class="img-style" />
          <p class="left-bottom-p">报告</p>
        </div>
        <p class="left-bottom-p-num">01</p>
        <div class="footer-left-search left-bottom-split">
          <input class="input-box" v-model="search_text" />
          <img :src="searchIUrl" class="search-img" />
        </div>
      </div>
      <div class="footer-content">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1" class="left-img">综合态势</el-menu-item>
          <el-menu-item index="2" class="mid-img">动用使用</el-menu-item>
          <el-menu-item index="3" class="mid-img">质量维修</el-menu-item>
          <el-menu-item index="4" class="right-img">供应保障</el-menu-item>
        </el-menu>
      </div>

      <div class="footer-right">
        <div class="back-button">
          <p class="back-button-text">返回</p>
        </div>

        <!-- <el-button round  >返回</el-button> -->
      </div>
    </div>
  </div>
</template>
<script>
import LeftOne from './ApplyOfPlane/LeftOne';
import LeftTwo from './ApplyOfPlane/LeftTwo';
import RightOne from './ApplyOfPlane/RightOne';
import TaskImg from '../assets/task.png';
import EquipmentImg from '../assets/equipment.png';
import ReportImg from '../assets/report.png';
import SplitLineImg from '../assets/split-line.png';
import SearchImg from '../assets/search.png';
import TitleLeftImg from '../assets/title-left.png';
import TitleRightImg from '../assets/title-right.png';
import BlankImg from '../assets/block.png';
// import BackGourdImg from '../assetsback'
// import MainLeftBtnImg from '../assets/main-left-btn.png';
export default {
  name: 'init-page',
  components: {
    LeftOne,
    LeftTwo,
    RightOne
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      taskUrl: TaskImg,
      equipmentUrl: EquipmentImg,
      reportUrl: ReportImg,
      splitLineUrl: SplitLineImg,
      searchIUrl: SearchImg,
      titleLeftUrl: TitleLeftImg,
      titleRightUrl: TitleRightImg,
      blackUrl: BlankImg,
      // mainLeftBtnUrl: MainLeftBtnImg,
      search_text: ''
    };
  },
  mounted() {
    // this.pic.taskUrl = TaskImg;
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
@font-face {
  font-family: "Zhongheijian"; /* 这个名字可以自己定义 */
  src: url("../assets/font/Zhongheijian.ttf");
}
.footer-left-search {
  width: 230px;
  height: 43px;
}

.title-img-left {
  width: 80px;
  height: 8px;
  /* margin-top: 60px; */
}
.head-strstyle {
  font-family: "Zhongheijian";
}
.head-strstyle-lr {
  color: whitesmoke;
  font-size: 24px;
}
.black-img-text {
  height: 8px;
  width: 8px;
  position: absolute;
  margin-top: -60px;
  margin-left: 8px;
}
.head-strstyle-mid {
  /* color: transparent; */
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) -50%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 150%
  );
  /* background: linear-gradient(to right, rgba(0,0,0,.1) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0,0,0,.1) 100%); */
  font-size: 44px;
  -webkit-background-clip: text;
  color: transparent;
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
}
.left-img {
  font-family: "Zhongheijian";
  width: 110px;
  /* height: 150px; */
  background-image: url("../assets/main-left-btn.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
  /* border: solid 1px rgb(141, 141, 141); */
}
.left-img:focus {
  font-family: "Zhongheijian";
  width: 110px;
  /* height: 150px; */
  background-image: url("../assets/main-left-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
  /* border: solid 1px rgb(141, 141, 141); */
}
.left-img:hover {
  font-family: "Zhongheijian";
  width: 110px;
  /* height: 150px; */
  background-image: url("../assets/main-left-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
  /* border: solid 1px rgb(141, 141, 141); */
}

.mid-img {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../assets/main-mid-btn.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.mid-img:hover {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../assets/main-mid-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.mid-img:focus {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../assets/main-mid-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.right-img {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../assets/main-right-btn.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.right-img:hover {
  /* 激活使用is-active */
  width: 110px;
  background-image: url("../assets/main-right-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.right-img:focus {
  /* 激活使用is-active */
  width: 110px;
  background-image: url("../assets/main-right-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
/* .footer-content .el-menu {
  border-right: solid 1px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
} */
.footer-content .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.footer-content .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.footer-content .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0);
}

.el-menu::after {
  clear: both;
}
.footer-content .el-menu.el-menu--horizontal {
  border-bottom: solid 1px rgba(255, 255, 255, 0);
}

.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  color: inherit;
}
.el-menu--horizontal > .el-submenu {
  float: left;
}
.el-menu--horizontal > .el-submenu:focus,
.el-menu--horizontal > .el-submenu:hover {
  outline: 0;
}
.el-menu--horizontal > .el-submenu:focus .el-submenu__title,
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: #303133;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 2px solid #409eff;
  color: #303133;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid transparent;
  color: #909399;
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  position: static;
  vertical-align: middle;
  margin-left: 8px;
  margin-top: -3px;
}
.footer-content .el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: rgba(255, 255, 255, 0);
  float: none;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  color: #909399;
}
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
  color: #ffffff;
}
.footer-content .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.footer-content .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: whitesmoke;
  /* color: #303133; */
}
.footer-content .el-menu--horizontal > .el-menu-item.is-active {
  /* 激活状态 */
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  /* color: #303133; */
  color: whitesmoke;
}
.el-menu--collapse {
  width: 64px;
}

.el-menu--collapse .el-submenu .el-menu {
  position: absolute;
  margin-left: 5px;
  top: 0;
  left: 100%;
  z-index: 10;
  border: 1px solid #e4e7ed;
  border-radius: 2px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-menu--popup {
  z-index: 100;
  border: none;
  padding: 5px 0;
  border-radius: 2px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.footer-content .el-menu-item {
  font-size: 27px;
  width: 300px;
  color: whitesmoke;
  /* color: #303133; */
  padding: 0 90px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.el-menu-item i {
  color: #909399;
}
.el-menu-item:focus,
.el-menu-item:hover {
  outline: 0;
  background-color: rgba(0, 0, 0, 0);
}
.el-menu-item.is-disabled {
  opacity: 0.25;
  cursor: not-allowed;
  background: 0 0 !important;
}

.el-menu-item.is-active {
  color: #409eff;
}
.el-menu-item.is-active i {
  color: inherit;
}

.el-submenu__title {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-submenu__title * {
  vertical-align: middle;
}
.el-submenu__title i {
  color: #909399;
}
.el-submenu__title:focus,
.el-submenu__title:hover {
  outline: 0;
  background-color: rgba(0, 0, 0, 0);
}
.el-submenu__title.is-disabled {
  opacity: 0.25;
  cursor: not-allowed;
  background: 0 0 !important;
}
.el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0);
}
.el-submenu.is-active .el-submenu__title {
  border-bottom-color: #409eff;
}
.el-menu-item-group__title {
  padding: 7px 0 7px 20px;
  line-height: normal;
  font-size: 12px;
  color: #909399;
}

.search-img {
  height: 26px;
  width: 26px;
  position: absolute;
  margin-top: -32px;
  margin-left: 202px;
}
.input-box {
  color: aliceblue;
  display: inline-block;
  width: 230px;
  border-radius: 7px;
  height: 38px;
  text-indent: 4px;
  /* margin-top: 9px; */
  border: 1px solid;
  background-color: #031119;
  box-shadow: #012c40 0px 0px 20px 1px;
}
.split-line {
  margin-left: 18px;
  height: 45px;
  width: 2px;
}
.left-bottom-p-num {
  font-family: "Zhongheijian";
  color: whitesmoke;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 12px;
  margin-right: 60px;
}
.img-style {
  height: 64px;
  width: 64px;
  margin-top: -8px;
}
.left-bottom-p {
  font-family: "Zhongheijian";
  color: whitesmoke;
  text-align: center;
  font-size: 12px;
  margin-top: -18px;
  margin-left: 4px;
}
.left-bottom-split {
  margin-left: 3px;
}

.footer-left-task {
  display: flex;
  flex-direction: column;
}

html {
  /* height: 100%; */
  height: 1620px;
  width: 4320px;
  /* min-height: 100%; */
  background-image: url("../assets/dt.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* background-color: rgb(16, 16, 102); */
}
.footer-left-one {
  width: 388px;
  height: 66px;
  background-image: url("../assets/left-bottom-backgroud.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footer-left-one-span {
  font-family: "Zhongheijian";
  /* color: whitesmoke; */
  color: azure;
  font-size: 20px;
  margin-left: 12px;
  margin-top: 7px;
}
.back-button {
  width: 100px;
  height: 50px;
  margin-right: 140px;
  display: inline-block;
  background-image: url("../assets/back-btn.png");
  background-size: 100% 100%;
}
.back-button:hover {
  width: 100px;
  height: 50px;
  margin-right: 140px;
  display: inline-block;
  background-image: url("../assets/back-btn-active.png");
  background-size: 100% 100%;
}
.back-button-text {
  user-select: none;
  font-family: "Zhongheijian";
  color: azure;
  font-size: 18px;
  margin-top: 15px;
  margin-right: 30px;
  /* margin-right: 140px; */
  display: inline-block;
}

.footer-content .el-menu {
  border-right: solid 1px rgba(255, 255, 255, 0);
  list-style: none;
  user-select: none;
  position: relative;
  /* margin: 0; */
  margin-left: 5px;
  padding-left: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
}

.left-two-style {
  margin-left: 20px;
  background-image: url("../assets/echarts-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.left-one-style {
  margin-left: 10px;
  background-image: url("../assets/echarts-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-style {
  background-image: url("../assets/echarts-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.wapper {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image:url('../assets/main-backgroud.png');
  background-repeat:no-repeat;
  background-size:100% 90%; */
}
.main {
  width: 100%;
  flex: 1;
  -ms-flex: 1 1 auto; /*降级处理兼容ie, 如果设置 -ms-flex:1不起作用,会让footer覆盖在main上面*/
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
}
.headinfo-content {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.headinfo-left {
  flex: 1;
  margin-left: 120px;
  /* width: 300px;     */
}
.headinfo-right {
  flex: 1;
  text-align: right;
  /* width: 300px;     */
}
.main-left {
  /* flex: 1; */
  display: flex;
  flex-direction: row;
  margin-left: 120px;
}
.main-content {
  text-align: center;
  flex: 1;
}
.main-right {
  /* flex: 1; */
}
.headinfo {
  /* height: 100px;  */
  width: 100%;
  flex: 0;
  display: flex;
  flex-direction: row;
  background-image: url("../assets/main-top.png");
  /* justify-content:center; */
}
.footer {
  width: 100%;
  height: 100px;
  margin-top: 70px;
  /* margin-top: -32px; */
  /* flex: 0; */
  display: flex;
  flex-direction: row;
  background-image: url("../assets/main-bottom1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footer-left {
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-left: 140px;
  margin-top: 36px;
}
.footer-content {
  /* margin-top: -10px; */
  margin-left: -140px;
  flex: 1;
  /* width: 1180px; */
  /* height: 74px; */
}
.footer-right {
  width: 100%;
  flex: 1;
  justify-content: flex-end;
  margin-left: auto;
  text-align: right;
}
</style>
