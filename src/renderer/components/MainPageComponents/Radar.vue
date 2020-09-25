<template>
  <div class="main-context">
        <div class="main-middle-content">
      <div class="main-middle-button">
        <p class="main-middle-button-text">全国</p>
      </div>
      <div class="main-middle-button">
        <p class="main-middle-button-text">东部</p>
      </div>
      <div class="main-middle-button">
        <p class="main-middle-button-text">南部</p>
      </div>
      <div class="main-middle-button">
        <p class="main-middle-button-text">西部</p>
      </div>
      <div class="main-middle-button">
        <p class="main-middle-button-text">北部</p>
      </div>
      <div class="main-middle-button">
        <p class="main-middle-button-text">中部</p>
      </div>
    </div>
    <div class="main-left">
      <left-one class="left-one-style" />
    </div>

    <div class="main-right">
      <right-one class="right-style" />
    </div>
  </div>
</template>

<script>
import LeftOne from './Radar/LeftOne';
import RightOne from './Radar/RightOne';
import TaskImg from '../../assets/task.png';
import EquipmentImg from '../../assets/equipment.png';
import ReportImg from '../../assets/report.png';
import SplitLineImg from '../../assets/split-line.png';
import SearchImg from '../../assets/search.png';
import TitleLeftImg from '../../assets/title-left.png';
import TitleRightImg from '../../assets/title-right.png';
import BlankImg from '../../assets/block.png';
// import BackGourdImg from '../assetsback'
// import MainLeftBtnImg from '../assets/main-left-btn.png';
export default {
  name: 'used-detail-page1',
  components: {
    LeftOne,
    RightOne
  },
  data() {
    return {

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
  // 检测路由变化
  watch: {

  },
  methods: {

  },
  created() {

  },
  mounted() {

  }
};
</script>

<style scoped>
@font-face {
  font-family: "Zhongheijian"; /* 这个名字可以自己定义 */
  src: url("../../assets/font/Zhongheijian.ttf");
}
.footer-left-search {
  width: 230px;
  height: 43px;
}
.main-buttom {
  display: flex;
  flex-direction: column;
}
.black-img-text {
  height: 8px;
  width: 8px;
  position: absolute;
  margin-top: -60px;
  margin-left: 8px;
}

.left-img {
  font-family: "Zhongheijian";
  width: 110px;
  /* height: 150px; */
  background-image: url("../../assets/main-left-btn.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
  /* border: solid 1px rgb(141, 141, 141); */
}
.left-img:focus {
  font-family: "Zhongheijian";
  width: 110px;
  /* height: 150px; */
  background-image: url("../../assets/main-left-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
  /* border: solid 1px rgb(141, 141, 141); */
}
.left-img:hover {
  font-family: "Zhongheijian";
  width: 110px;
  /* height: 150px; */
  background-image: url("../../assets/main-left-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
  /* border: solid 1px rgb(141, 141, 141); */
}

.mid-img {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../../assets/main-mid-btn.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.mid-img:hover {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../../assets/main-mid-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.mid-img:focus {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../../assets/main-mid-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.right-img {
  font-family: "Zhongheijian";
  width: 110px;
  background-image: url("../../assets/main-right-btn.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.right-img:hover {
  /* 激活使用is-active */
  width: 110px;
  background-image: url("../../assets/main-right-btn-active.png");
  background-repeat: no-repeat;
  background-size: 96% 100%;
}
.right-img:focus {
  /* 激活使用is-active */
  width: 110px;
  background-image: url("../../assets/main-right-btn-active.png");
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


.footer-content .el-menu.el-menu--horizontal {
  border-bottom: solid 1px rgba(255, 255, 255, 0);
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
  background-image: url("../../assets/dt.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* background-color: rgb(16, 16, 102); */
}
.footer-left-one {
  width: 388px;
  height: 66px;
  background-image: url("../../assets/left-bottom-backgroud.png");
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
.main-middle-button {
  width: 140px;
  height: 70px;
  /* margin-right: 140px; */
  display: inline-block;
  background-image: url("../../assets/main-content-btn.png");
  background-size: 100% 100%;
}
.main-middle-button:hover {
  width: 140px;
  height: 70px;
  /* margin-right: 140px; */
  display: inline-block;
  background-image: url("../../assets/main-content-btn-active.png");
  background-size: 100% 100%;
}
.main-middle-button-text {
  user-select: none;
  font-family: "Zhongheijian";
  color: whitesmoke;
  font-size: 18px;
  margin-top: 24px;
  /* margin-right: 30px; */
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


.left-one-style {
  height: 580px;
  margin-left: 10px;
  background-image: url("../../assets/child-small-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-style {
  background-image: url("../../assets/echarts-bg.png");
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
.main-context {
  height: 1360px;
  /* height: 100%; */
  width: 100%;
  flex: 1;
  -ms-flex: 1 1 auto; /*降级处理兼容ie, 如果设置 -ms-flex:1不起作用,会让footer覆盖在main上面*/
  display: flex;
  flex-direction: row;

  /* justify-content: center; */
}

.main-left {
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-left: 120px;
}
.main-middle-content{

    top: 110px;
   position: absolute;
    text-align: center;
    width: 4320px;
    height: 1360px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
/* .main-middle-content {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 60px;
} */
.main-right {
  /* flex: 1; */
}

.footer {
  width: 100%;
  height: 100px;
  margin-top: 70px;
  /* margin-top: -32px; */
  /* flex: 0; */
  display: flex;
  flex-direction: row;
  background-image: url("../../assets/main-bottom1.png");
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
