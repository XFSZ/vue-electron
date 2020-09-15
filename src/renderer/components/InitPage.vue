<template>
  <div class="wapper">
    <div class="headinfo">
      <div class="headinfo-left">
        <p>作战时间 2019年12月30日 12时34分10秒</p>
      </div>
      <div class="headinfo-content">
        <p>空军作战部队指挥系统</p>
      </div>
      <div class="headinfo-right">
        <p>天文时间 2019年12月30日 12时34分10秒 天气14C 湿度65% 风力7级</p>
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
        <right-one  class="right-style"/>
      </div>
    </div>
    <div class="footer" >
      <div class="footer-left">
        <div class="footer-left-one" ><span class="footer-left-one-span">左侧</span></div>
        <div class="footer-left-task" >
          <img :src="taskUrl" class="img-style">
          <p class="left-bottom-p">任务</p>
        </div>
        <p class="left-bottom-p-num">03</p>
        <img :src="splitLineUrl" class="split-line">
        <div class="footer-left-equipment left-bottom-split" >
          <img :src="equipmentUrl" class="img-style">
          <p class="left-bottom-p ">装备</p>
        </div>
        <p class="left-bottom-p-num">02</p>
        <img :src="splitLineUrl" class="split-line">
        <div class="footer-left-report left-bottom-split" >
          <img :src="reportUrl" class="img-style">
          <p class="left-bottom-p">报告</p>
        </div>
        <p class="left-bottom-p-num">01</p>
        <div class="footer-left-search left-bottom-split" >
          <input  class="input-box" v-model="search_text"  >
          <img :src="searchIUrl" class="search-img" >
        </div>
      </div>
      <div class="footer-content">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">综合态势</el-menu-item>
          <el-menu-item index="2">动用使用</el-menu-item>
          <el-menu-item index="3">质量维修</el-menu-item>
          <el-menu-item index="4">供应保障</el-menu-item>
        </el-menu>
      </div>

      <div class="footer-right">
        <p class="back-button">返回</p>
        
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
import searchImg from '../assets/search.png';
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
      searchIUrl: searchImg,
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
<style >
.search-img{
  height: 20px;
  width: 20px;
  position: absolute;
  margin-top: -24px;
  margin-left: 74px;
}
.input-box{
    display: inline-block;
    width: 100px;
    border-radius: 7px;
    height: 22px;
    text-indent: 4px;
    margin-top: 9px;
    border: 1px solid ;
    background-color: rgba(63, 50, 185, 1);
    box-shadow: rgb(50, 185, 79)  0px 0px 20px 1px ;
}
.split-line{
  margin-left: 18px;
  height: 45px;
  width: 2px;
}
.left-bottom-p-num{
  font-size: 20px;
  margin-top: 10px;
}
.img-style{
  height: 46px;
  width: 46px;
  margin-top: -10px;
}
.left-bottom-p{
  text-align: center;
  font-size: 12px;
  margin-top: -10px;
}
.left-bottom-split{
  margin-left: 3px;
}

.footer-left-task{
  display: flex;
  flex-direction: column; 
}
htmt,
body {
  height: 100%;
  min-height: 100%;
  /* background-color: rgb(16, 16, 102); */
}
.footer-left-one{
  width: 166px;
  height: 35px;
  background-image:url('../assets/left-bottom-backgourd2.png');
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.footer-left-one-span{
  color: azure;
  font-size: 10px;
  margin-left: 12px;
  margin-top: 7px
}
.back-button{
font-size: 10px;
margin-right: 13px;
display: inline;
}
.footer-content .el-menu{
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0);
}

.left-two-style{
  /* margin-left: 16px; */
  background-image:url('../assets/main-context-backgroud.png');
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left-one-style{
  margin-left: 10px;
  background-image:url('../assets/main-context-backgroud.png');
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.right-style{
  background-image:url('../assets/main-context-backgroud.png');
  background-repeat:no-repeat;
  background-size:100% 100%;
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
}
.headinfo-left {
  flex: 1;
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
  /* justify-content:center; */
}
.footer {
  width: 100%;
  /* height: 100px; */
  margin-top: -32px;
  /* flex: 0; */
  display: flex;
  flex-direction: row;
  background-image:url('../assets/main-bottom.png');
  background-repeat:no-repeat;
  background-size:100% 70%;
}
.footer-left {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.footer-content {
  margin-top: -10px;
  flex: 1;
}
.footer-right {
    width: 100%;
    flex: 1;
    justify-content: flex-end;
    margin-left: auto;
    text-align: right;
}
</style>
