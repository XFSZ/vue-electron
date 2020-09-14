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
        <left-one />
        <left-two class="left-two-style" />
      </div>
      <div class="main-content">
        <p>cccc</p>
      </div>
      <div class="main-right">
        <right-one />
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <p>左侧</p>
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
        <p>右侧</p>
        <!-- <el-button> -->
      </div>
    </div>
  </div>
</template>
<script>
import LeftOne from './ApplyOfPlane/LeftOne';
import LeftTwo from './ApplyOfPlane/LeftTwo';
import RightOne from './ApplyOfPlane/RightOne';
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
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
htmt,
body {
  height: 100%;
  min-height: 100%;
  /* background-color: rgb(0, 0, 105); */
}
.left-two-style{
  margin-left: 10px;
}
.wapper {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
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
  /* width: 300px;     */
}
.main-left {
 flex: 1;
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
  flex: 0;
  display: flex;
  flex-direction: row;
}
.footer-left {
  flex: 1;
}
.footer-content {
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
